<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex, nofollow');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function request_payload(): array
{
    $contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
    if (str_contains($contentType, 'application/json')) {
        $raw = file_get_contents('php://input');
        $decoded = json_decode($raw ?: '', true);
        return is_array($decoded) ? $decoded : [];
    }

    return $_POST;
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function required_text(array $payload, string $key, int $maximum): string
{
    $value = trim((string) ($payload[$key] ?? ''));
    if ($value === '' || text_length($value) > $maximum) {
        throw new InvalidArgumentException($key);
    }

    return $value;
}

function optional_text(array $payload, string $key, int $maximum): string
{
    $value = trim((string) ($payload[$key] ?? ''));
    if (text_length($value) > $maximum) {
        throw new InvalidArgumentException($key);
    }

    return $value;
}

function single_line(string $value): string
{
    return trim((string) preg_replace('/[\r\n\t]+/u', ' ', $value));
}

function request_origin(): string
{
    $origin = trim((string) ($_SERVER['HTTP_ORIGIN'] ?? ''));
    if ($origin !== '') {
        return strtolower(rtrim($origin, '/'));
    }

    $referer = trim((string) ($_SERVER['HTTP_REFERER'] ?? ''));
    if ($referer === '') {
        return '';
    }

    $parts = parse_url($referer);
    if (!is_array($parts) || empty($parts['scheme']) || empty($parts['host'])) {
        return '';
    }

    return strtolower($parts['scheme'] . '://' . $parts['host']);
}

function rate_limit_allows(string $ip, int $maximum = 5, int $windowSeconds = 900): bool
{
    $path = sys_get_temp_dir() . '/krk-contact-rate-' . hash('sha256', $ip) . '.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        return true;
    }

    $raw = stream_get_contents($handle);
    $decoded = json_decode($raw ?: '[]', true);
    $now = time();
    $events = is_array($decoded)
        ? array_values(array_filter($decoded, static fn ($timestamp): bool => is_int($timestamp) && $timestamp > $now - $windowSeconds))
        : [];

    $allowed = count($events) < $maximum;
    if ($allowed) {
        $events[] = $now;
    }

    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($events));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    @chmod($path, 0600);

    return $allowed;
}

function curl_request(string $url, array $options): array
{
    if (!function_exists('curl_init')) {
        throw new RuntimeException('PHP cURL extension is unavailable');
    }

    $handle = curl_init($url);
    if ($handle === false) {
        throw new RuntimeException('Could not initialize cURL');
    }

    curl_setopt_array($handle, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
        ...$options,
    ]);

    $body = curl_exec($handle);
    if ($body === false) {
        $message = curl_error($handle);
        curl_close($handle);
        throw new RuntimeException('Network request failed: ' . $message);
    }

    $status = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
    curl_close($handle);

    return [$status, (string) $body];
}

function graph_token(array $config, bool $forceRefresh = false): string
{
    $cachePath = sys_get_temp_dir() . '/krk-graph-token-' . hash('sha256', (string) $config['client_id']) . '.json';

    if (!$forceRefresh && is_file($cachePath)) {
        $cached = json_decode((string) @file_get_contents($cachePath), true);
        if (
            is_array($cached)
            && is_string($cached['access_token'] ?? null)
            && is_int($cached['expires_at'] ?? null)
            && $cached['expires_at'] > time() + 90
        ) {
            return $cached['access_token'];
        }
    }

    [$status, $body] = curl_request(
        'https://login.microsoftonline.com/' . rawurlencode((string) $config['tenant_id']) . '/oauth2/v2.0/token',
        [
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
            CURLOPT_POSTFIELDS => http_build_query([
                'client_id' => $config['client_id'],
                'client_secret' => $config['client_secret'],
                'scope' => 'https://graph.microsoft.com/.default',
                'grant_type' => 'client_credentials',
            ], '', '&', PHP_QUERY_RFC3986),
        ]
    );

    $decoded = json_decode($body, true);
    if ($status !== 200 || !is_array($decoded) || !is_string($decoded['access_token'] ?? null)) {
        throw new RuntimeException('Microsoft token request failed with HTTP ' . $status);
    }

    $expiresIn = max(300, (int) ($decoded['expires_in'] ?? 3600));
    @file_put_contents($cachePath, json_encode([
        'access_token' => $decoded['access_token'],
        'expires_at' => time() + $expiresIn,
    ]), LOCK_EX);
    @chmod($cachePath, 0600);

    return $decoded['access_token'];
}

function send_graph_mail(array $config, array $message): void
{
    $url = 'https://graph.microsoft.com/v1.0/users/' . rawurlencode((string) $config['sender']) . '/sendMail';

    for ($attempt = 0; $attempt < 2; $attempt++) {
        $token = graph_token($config, $attempt === 1);
        [$status] = curl_request($url, [
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $token,
                'Content-Type: application/json',
            ],
            CURLOPT_POSTFIELDS => json_encode([
                'message' => $message,
                'saveToSentItems' => true,
            ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR),
        ]);

        if ($status === 202) {
            return;
        }
        if ($status !== 401 || $attempt === 1) {
            throw new RuntimeException('Microsoft Graph sendMail failed with HTTP ' . $status);
        }
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'message' => 'Method not allowed']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 32768) {
    respond(413, ['ok' => false, 'message' => 'Request too large']);
}

$configPath = getenv('KRK_FORM_CONFIG') ?: dirname(__DIR__, 2) . '/krk-form-config.php';
if (!is_file($configPath)) {
    error_log('KRK contact form: private configuration file is missing');
    respond(503, ['ok' => false, 'message' => 'Mail service is not configured']);
}

$config = require $configPath;
$requiredConfig = ['tenant_id', 'client_id', 'client_secret', 'sender', 'recipient'];
if (!is_array($config)) {
    respond(503, ['ok' => false, 'message' => 'Mail service is not configured']);
}
foreach ($requiredConfig as $key) {
    if (!is_string($config[$key] ?? null) || trim($config[$key]) === '') {
        error_log('KRK contact form: missing configuration key ' . $key);
        respond(503, ['ok' => false, 'message' => 'Mail service is not configured']);
    }
}
if (!filter_var($config['sender'], FILTER_VALIDATE_EMAIL) || !filter_var($config['recipient'], FILTER_VALIDATE_EMAIL)) {
    respond(503, ['ok' => false, 'message' => 'Mail service is not configured']);
}

$allowedOrigins = $config['allowed_origins'] ?? ['https://krk.com.ar', 'https://www.krk.com.ar'];
$origin = request_origin();
if (!is_array($allowedOrigins) || $origin === '' || !in_array($origin, array_map(static fn ($value): string => strtolower(rtrim((string) $value, '/')), $allowedOrigins), true)) {
    respond(403, ['ok' => false, 'message' => 'Invalid request origin']);
}

$payload = request_payload();
if (trim((string) ($payload['website'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}

$startedAt = filter_var($payload['started_at'] ?? null, FILTER_VALIDATE_INT);
$elapsed = $startedAt ? (int) floor(microtime(true) * 1000) - (int) $startedAt : 0;
if ($elapsed < 2500 || $elapsed > 7200000) {
    respond(422, ['ok' => false, 'message' => 'Invalid submission timing']);
}

$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (!rate_limit_allows($ip)) {
    respond(429, ['ok' => false, 'message' => 'Too many requests']);
}

try {
    $name = single_line(required_text($payload, 'nombre', 120));
    $company = single_line(optional_text($payload, 'empresa', 160));
    $email = strtolower(single_line(required_text($payload, 'email', 254)));
    $phone = single_line(optional_text($payload, 'telefono', 50));
    $messageText = required_text($payload, 'mensaje', 4000);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new InvalidArgumentException('email');
    }

    $reference = strtoupper(bin2hex(random_bytes(4)));
    $language = ($payload['language'] ?? 'es') === 'en' ? 'en' : 'es';
    $subject = ($language === 'en' ? 'New website enquiry' : 'Nueva consulta desde la web') . ' — ' . $name;

    $escape = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $html = '<h2>' . $escape($language === 'en' ? 'New website enquiry' : 'Nueva consulta desde la web') . '</h2>'
        . '<p><strong>' . $escape($language === 'en' ? 'Name' : 'Nombre') . ':</strong> ' . $escape($name) . '</p>'
        . '<p><strong>' . $escape($language === 'en' ? 'Company' : 'Empresa') . ':</strong> ' . $escape($company ?: '—') . '</p>'
        . '<p><strong>Email:</strong> ' . $escape($email) . '</p>'
        . '<p><strong>' . $escape($language === 'en' ? 'Phone' : 'Teléfono') . ':</strong> ' . $escape($phone ?: '—') . '</p>'
        . '<p><strong>' . $escape($language === 'en' ? 'Message' : 'Mensaje') . ':</strong></p>'
        . '<p>' . nl2br($escape($messageText)) . '</p>'
        . '<hr><p style="color:#667085;font-size:12px">Referencia: ' . $escape($reference) . '</p>';

    send_graph_mail($config, [
        'subject' => $subject,
        'body' => ['contentType' => 'HTML', 'content' => $html],
        'toRecipients' => [[
            'emailAddress' => [
                'address' => $config['recipient'],
                'name' => 'KRK Comercial',
            ],
        ]],
        'replyTo' => [[
            'emailAddress' => [
                'address' => $email,
                'name' => $name,
            ],
        ]],
    ]);

    respond(200, ['ok' => true, 'reference' => $reference]);
} catch (InvalidArgumentException) {
    respond(422, ['ok' => false, 'message' => 'Invalid form data']);
} catch (Throwable $error) {
    $reference = strtoupper(bin2hex(random_bytes(4)));
    error_log('KRK contact form error [' . $reference . ']: ' . $error->getMessage());
    respond(502, ['ok' => false, 'message' => 'Could not send message', 'reference' => $reference]);
}
