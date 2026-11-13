# Discografica Romana

🇬🇧 English · **[Italiano](README.it.md)**

Official website of **Discografica Romana**: a static landing page presenting the label's complete music pipeline (studios, production, events) and collecting contact requests from people who want to submit a project.

🌐 **Live:** [discograficaromana.it](https://discograficaromana.it)

> This is the `landing-page` branch: it contains the static landing page running in production.
> The `main` branch holds the full application (events, studios, admin area with Supabase).

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [lucide-svelte](https://lucide.dev) |
| Build | `@sveltejs/adapter-static` (fully static output) |
| Contact form | [Formspree](https://formspree.io) |
| Component dev | Storybook 10 |
| Hosting | GitHub Pages with a custom domain |

## Repository structure

```
.
├── .github/workflows/deploy.yml   # CI/CD to GitHub Pages
└── discografica-romana/           # SvelteKit application
    ├── src/
    │   ├── lib/                   # components: Navbar, Hero, AboutSection,
    │   │                          #   StatsSection, ContactForm, Footer
    │   └── routes/                # pages: home and privacy-policy
    ├── static/                    # images, fonts, CNAME
    └── .storybook/                # Storybook configuration
```

## Getting started

**Requirements:** Node.js 22 (the same version used by CI) and npm.

```sh
cd discografica-romana
npm install
npm run dev
```

The site is available at `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Static build into the `build/` folder |
| `npm run preview` | Preview the build locally |
| `npm run check` | Type checking with `svelte-check` |
| `npm run storybook` | Storybook at `http://localhost:6006` |

## Contact form

The form on the home page submits to Formspree through a public endpoint defined in [`ContactForm.svelte`](discografica-romana/src/lib/ContactForm.svelte). No environment variables or API keys are needed.

## Deployment

Every push to `landing-page` triggers the [`deploy.yml`](.github/workflows/deploy.yml) workflow, which:

1. installs dependencies (`npm ci`);
2. builds the static site (`npm run build`);
3. publishes the contents of `build/` to the `gh-pages` branch, served by GitHub Pages.

The custom domain is configured through the [`static/CNAME`](discografica-romana/static/CNAME) file.

## Privacy

The site does not use profiling cookies. Information on how data submitted through the form is processed is available on the `/privacy-policy` page.

## Credits

The cover video (`static/video/1920x1080_orange2.mp4`) and its poster image were created by **Jacopo Mancini**, a member of Discografica Romana. All rights belong to Discografica Romana, and they **may not be used**, copied, modified or distributed by others without written permission. Jacopo's official channels are Instagram [@jacopomancini_ar](https://www.instagram.com/jacopomancini_ar/) and [replayfilmaker.com](https://replayfilmaker.com).

## Logo and trademark

The name, logo and visual identity of **Discografica Romana** are the exclusive property of the label and **may not be used**, copied, modified or distributed, in whole or in part, without written permission. This also applies to forks and derivative projects of this repository: if you reuse the code, remove the logo (`static/images/logo.png`, `discografica_profilo.png`, favicon) and every reference to the brand.

## License

All rights reserved © Discografica Romana. The repository may be browsed, but logos, images, fonts and content may not be reused without permission.
