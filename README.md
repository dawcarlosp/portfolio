# Portfolio - Carlos Pereira

Portfolio personal construido con [Astro v7](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com).

**[dawcarlosp.github.io/portfolio](https://dawcarlosp.github.io/portfolio)**

## Stack

- **Astro v7** — static site generation
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **GitHub Pages** — hosting + GitHub Actions para CI/CD

## Estructura

```
src/
  components/
    Nav.astro               # Barra de navegación
    Hero.astro              # Hero con avatar + título
    Background.astro        # Fondo fijo: cielo, luna, estrellas, aurora, shooting stars, reflejos
    SectionHeading.astro    # Encabezado de sección reutilizable
    About.astro             # Sección "Sobre mí" con tarjetas
    Enfoque.astro           # Enfoque / filosofía (3 pilares)
    Skills.astro            # Stack: Núcleo | Competente | Exploración | Infra
    Projects.astro          # Proyectos (LocuVentas + sandbox)
    ProjectCard.astro       # Tarjeta de proyecto reutilizable
    GitHubStats.astro       # Estadísticas de GitHub via github-readme-stats
    Contact.astro           # Contacto + footer con SVG banner
  layouts/
    Layout.astro            # Layout base con SEO
  pages/
    index.astro             # Página principal
  styles/
    global.css              # Tema Tailwind v4 + animaciones personalizadas
public/
  images/                   # Imágenes, SVGs de skills y assets del sitio
```

## Diseño

- **Acento:** `#00ffcc` (aurora)
- **Violeta:** `#9B51E0`
- **Azul:** `#3B82F6`
- **Tipografía:** Inter (sans) + Space Grotesk (headings)
- **Efectos:** glass (.glass, .glass-strong), animaciones CSS personalizadas

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualizar build local |

## Deploy

Push a `master` dispara el workflow de GitHub Actions que construye el sitio y lo publica en GitHub Pages.
