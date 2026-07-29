# kilsombg.github.io

Personal portfolio.

**Live site:** https://kilsombg.github.io

## Stack

- [Astro](https://astro.build) — static site, no UI framework, minimal JS
- Plain CSS with custom properties for theming (see `src/styles/global.css`)
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Structure

```
src/
  components/   Nav, Hero, About, Skills, ProjectCard, Footer
  data/         projects.ts — single source of truth for project content
  layouts/      BaseLayout, ProjectLayout
  pages/        index.astro, resume.astro, projects/*.astro
  styles/       global.css — theme tokens, reset, print styles
public/
  fonts/        self-hosted Space Grotesk + Inter (latin subset)
  images/       project preview screenshots
```

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Adding a project

Add an entry to `src/data/projects.ts` and a thin page under `src/pages/projects/<slug>.astro`:

```astro
---
import ProjectLayout from "../../layouts/ProjectLayout.astro";
import { getProject } from "../../data/projects";

const project = getProject("<slug>")!;
---

<ProjectLayout project={project} />
```

It'll automatically show up in the home page's project grid.
