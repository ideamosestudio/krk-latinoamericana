# DNS, cPanel, Git y Microsoft 365

## Arquitectura definitiva

- Sitio público: cPanel en `https://krk.com.ar`.
- Código fuente: GitHub, repositorio público `ideamosestudio/krk-latinoamericana`.
- Copia administrada por cPanel: `/home4/krkcomar/repositories/krk-web`.
- Archivos públicos: `/home4/krkcomar/public_html`.
- Correo: Microsoft 365.
- El sitio es estático: no necesita Node.js, base de datos ni procesos activos en el servidor.

## Delegación en NIC Argentina

Delegar `krk.com.ar` a los nameservers mostrados por el hosting:

- `ns1.servidoraweb.net`
- `ns2.servidoraweb.net`

Hasta que NIC Argentina complete esa delegación, la zona cargada en cPanel no será autoritativa para el dominio.

## Registros web para cPanel

Conservar:

| Nombre | Tipo | Valor | TTL |
|---|---|---|---|
| @ | A | 167.250.5.17 | 3600 |
| www | CNAME | krk.com.ar. | 3600 |

Los registros `cpanel`, `whm`, `ftp` y `webdisk` pueden conservarse para la administración del hosting.

Después de delegar el dominio:

1. Confirmar que `krk.com.ar` y `www.krk.com.ar` responden desde el servidor.
2. Ejecutar AutoSSL en cPanel.
3. Verificar HTTPS.
4. El sitio redirige automáticamente `www` y HTTP hacia `https://krk.com.ar`.

## Registros de Microsoft 365

Reemplazar el correo anterior por estos registros:

| Nombre | Tipo | Prioridad | Valor | TTL |
|---|---|---:|---|---|
| @ | MX | 0 | krk-com-ar.mail.protection.outlook.com. | 3600 |
| @ | TXT | — | v=spf1 include:spf.protection.outlook.com -all | 3600 |
| autodiscover | CNAME | — | autodiscover.outlook.com. | 3600 |
| enterpriseregistration | CNAME | — | enterpriseregistration.windows.net. | 3600 |
| enterpriseenrollment | CNAME | — | enterpriseenrollment-s.manage.microsoft.com. | 3600 |

Antes de delegar:

1. Eliminar el MX actual que apunta a `krk.com.ar`.
2. Confirmar que exista un solo SPF en el dominio raíz.
3. Cargar los cinco registros de Microsoft 365.
4. `mail.krk.com.ar` y `webmail.krk.com.ar` no son necesarios para Microsoft 365; pueden retirarse después de confirmar que ninguna cuenta anterior los usa.
5. Mantener temporalmente el DKIM anterior hasta que Microsoft entregue sus dos CNAME DKIM.
6. Activar DKIM en Microsoft 365 y después configurar DMARC. No se inventan estos valores: deben obtenerse del panel de Microsoft 365.

## Repositorio Git de cPanel

Repositorio remoto:

`https://github.com/ideamosestudio/krk-latinoamericana.git`

Ruta de cPanel:

`/home4/krkcomar/repositories/krk-web`

Nombre:

`KRK Latinoamericana`

El repositorio está separado de `public_html` para evitar exponer el código fuente y el historial Git.

## Actualización normal

Cada actualización realizada localmente o con IA debe:

1. Modificar el código fuente.
2. Ejecutar `npm test`.
3. Ejecutar `npm run build:cpanel` si no se ejecutó como parte de las pruebas.
4. Confirmar los cambios, incluida la carpeta `site/`.
5. Subir la rama `main` a GitHub.
6. En cPanel, usar **Update from Remote**.
7. En cPanel, usar **Deploy HEAD Commit**.

El despliegue copia `site/` sobre `public_html/` sin borrar carpetas técnicas del hosting.

## Acceso SSH opcional

La interfaz de cPanel permite actualizar y desplegar sin shell. Si el proveedor habilita **Jailed Shell**, Terminal y claves SSH, también podrá configurarse un remoto Git directo hacia cPanel para que una IA autorizada publique por SSH.

No compartir contraseñas generales. Utilizar una clave SSH dedicada y revocable.

## Copia migrable

La carpeta `site/` es una copia completa del sitio lista para cualquier hosting estático. Además se genera un ZIP entregable para conservar fuera del repositorio.

Para migrar manualmente:

1. Extraer el ZIP.
2. Copiar el contenido de `public_html/` al directorio público del nuevo servidor.
3. Apuntar el DNS al servidor nuevo.
4. Mantener sin cambios los registros de Microsoft 365.
