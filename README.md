# Natalia Jabinschi — Web Developer Portfolio

A responsive, editorial-style portfolio built with Astro and TypeScript. The complete portfolio is available in English (`/`), French (`/fr/`), and Romanian (`/ro/`), with a language switcher on every page. It is statically generated, uses minimal client-side JavaScript, and is prepared for automatic deployment to GitHub Pages.

## Requirements

- Node.js `>=22.23.4`
- npm

## Local development

```sh
npm ci
npm run dev
```

Astro prints the local development URL in the terminal.

## Quality checks and production build

```sh
npm run check
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Updating portfolio content

- `src/data/profile.ts` — name, location, experience, email, and social links.
- `src/data/projects.ts` — verified project case studies. Add English content and optional `translations` for French and Romanian; do not publish client details without permission. Optional preview images can be placed in `public/images/` and referenced from a project record.
- `src/data/skills.ts` — skill groups.
- `src/data/education.ts` — qualifications and institutions. Add graduation dates only when confirmed.
- `src/data/qualities.ts` — working qualities. Localized labels and descriptions are in `src/i18n/translations.ts`.
- `src/i18n/translations.ts` — all page copy, accessibility labels, language names, and localized categories for English, French, and Romanian.

The shared page is `src/components/PortfolioPage.astro`; `src/pages/index.astro` serves English and `src/pages/[lang].astro` generates French and Romanian routes. Shared layout and project/skill presentation are in `src/layouts/` and `src/components/`; site-wide styles are in `src/styles/global.css`.

Contact email and GitHub profile are intentionally blank until the correct public details are supplied. If you have a public canonical URL, add it as a repository variable named `SITE_URL` under **Settings → Secrets and variables → Actions → Variables**. It will be used for canonical and language-alternate metadata.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs type checks, builds the site, and deploys it whenever code is pushed to `main`.

1. Create a GitHub repository and connect this local repository:

   ```sh
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Subsequent pushes to `main` will automatically publish the site.

Astro uses the repository path as its base on project Pages sites, and the root path for `USERNAME.github.io` sites.
