# KRK Latinoamericana

Sitio institucional bilingüe de KRK Latinoamericana S.A., desarrollado con Next.js y publicado como sitio estático en cPanel.

## Desarrollo

Requisitos: Node.js 22 o superior.

```bash
npm install
npm run dev
```

## Verificaciones

```bash
npm test
```

El comando valida tipos, reglas de calidad, genera el sitio estático y comprueba rutas, SEO, sitemap y archivos para lectores de IA.

## Preparar una publicación

```bash
npm run build:cpanel
```

Este comando actualiza:

- `out/`: compilación temporal para validación.
- `site/`: copia estática versionada y lista para cPanel.

Toda modificación que vaya a producción debe incluir los cambios de código y la carpeta `site/` regenerada.

## Publicación en cPanel

cPanel clona la rama `main` de GitHub en:

`/home4/krkcomar/repositories/krk-web`

El archivo `.cpanel.yml` copia únicamente `site/` dentro de `public_html/`.

Después de subir una actualización a GitHub:

1. Abrir **Git Version Control** en cPanel.
2. Entrar en **Administrar** para KRK Latinoamericana.
3. Presionar **Update from Remote**.
4. Presionar **Deploy HEAD Commit**.

La configuración de DNS, correo, formulario con Microsoft 365 y despliegue está documentada en [docs/DNS-Y-DESPLIEGUE.md](docs/DNS-Y-DESPLIEGUE.md).
