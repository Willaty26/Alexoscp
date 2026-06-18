# Versión estática para GitHub Pages

Esta carpeta contiene una copia 100% HTML/CSS/JS de tu sitio, lista para publicar en GitHub Pages **sin afectar tu proyecto de Lovable**.

## Cómo publicarla

1. Sincroniza este proyecto con tu repositorio de GitHub (botón GitHub arriba a la derecha en Lovable).
2. En GitHub, ve a **Settings → Pages**.
3. En **Source** selecciona:
   - Branch: `main`
   - Folder: `/docs`
4. Guarda. En ~1 minuto tu sitio quedará vivo en:

   **https://willaty26.github.io/Alexoscp/**

## Archivos

- `index.html` → página principal
- `servicios.html`, `sobre-mi.html`, `faq.html`, `contacto.html` → secciones
- `styles.css` → todo el diseño (dark + acentos cian)
- `script.js` → menú móvil + formulario que abre WhatsApp
- `sitemap.xml`, `robots.txt` → SEO
- `.nojekyll` → evita que GitHub procese los archivos con Jekyll

## Editar contenido

Cualquier cambio en estos archivos `.html` se refleja directo en GitHub Pages tras el push. El sitio de Lovable (`alexoscp.lovable.app`) sigue funcionando aparte y se edita desde el proyecto.
