## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project Structure

```
src/
  components/
    Nav.astro               # Navigation bar
    Hero.astro              # Hero section with avatar + title
    Background.astro        # Fixed background: sky, moon, stars, aurora, shooting stars, reflections
    SectionHeading.astro    # Reusable heading + subtitle component
    About.astro             # About section cards
    Enfoque.astro           # Approach / philosophy section (3 pillars)
    Skills.astro            # Stack: Núcleo 🟢 / Competente 🟡 / Exploración 🔵 / Infra 🟣
    Projects.astro          # Projects section (LocuVentas + sandbox)
    ProjectCard.astro       # Reusable project card with image, tags, links
    GitHubStats.astro       # GitHub image stats from external service (github-readme-stats)
    Contact.astro           # Contact + footer with local SVG banner
  layouts/
    Layout.astro            # Base HTML layout with SEO
  pages/
    index.astro             # Main page importing all sections
  styles/
    global.css              # Tailwind v4 theme + custom animations
public/
  images/
    footer-banner.svg       # Footer SVG with moon, aurora, typing animation
    astronauta.png          # Hero avatar image
```

## GitHub Stats

`GitHubStats.astro` uses `<img>` tags pointing to an external `github-readme-stats` service for displaying general stats and top languages. Falls back to an empty image if the service is unavailable.

## Projects

`ProjectCard.astro` accepts `image` and `imageAlt` props. Photos should go in `public/images/`. Links can have `variant: 'code'` for ghost-style buttons.

## Design Tokens (global.css)

- `--color-aurora`: `#00ffcc` (primary accent)
- `--color-violet`: `#9B51E0`
- `--color-blue-accent`: `#3B82F6`
- Fonts: Inter (sans) + Space Grotesk (headings)
- Glass effects via `.glass` and `.glass-strong` utility classes

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
