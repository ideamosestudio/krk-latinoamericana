<?php
// Copiar este archivo como /home4/krkcomar/krk-form-config.php.
// El archivo real debe quedar fuera de public_html y nunca debe subirse a Git.
return [
    'tenant_id' => 'PEGAR_ID_DEL_DIRECTORIO_TENANT',
    'client_id' => 'PEGAR_ID_DE_LA_APLICACION',
    'client_secret' => 'PEGAR_VALOR_DEL_SECRETO',
    'sender' => 'noresponder@krk.com.ar',
    'recipient' => 'comercial@krk.com.ar',
    'allowed_origins' => [
        'https://krk.com.ar',
        'https://www.krk.com.ar',
    ],
];
