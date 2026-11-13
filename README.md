# Discografica Romana

🇬🇧 English · **[Italiano](README.it.md)**

Web application for **Discografica Romana**: the label's website, with a public showcase of events and studios and a private area to manage content (artists, events, studios, publications).

> This is the `main` branch: the full application, with a Supabase backend and an admin area.
> The `landing-page` branch holds the static landing page published at [discograficaromana.it](https://discograficaromana.it).

## Features

- **Home** with About, Events and Studios sections.
- **Events** (`/events`): upcoming and past events, loaded from Supabase.
- **Studios** (`/studios`): studio pages with description and services.
- **Artists** (`/artists`): artists page.
- **Admin area** (`/admin`): protected dashboard to add artists, events, studios and publications.
- **Login** (`/login`): email and password sign-in through Supabase Auth. `/admin` routes redirect to the login page when there is no valid session.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [lucide-svelte](https://lucide.dev) |
| Backend and auth | [Supabase](https://supabase.com) (`@supabase/supabase-js`, `@supabase/ssr`) |
| Component dev | Storybook 10 |
| Testing | Vitest + Playwright |

## Repository structure

```
.
└── discografica-romana/           # SvelteKit application
    ├── src/
    │   ├── hooks.server.ts        # server-side Supabase client + session
    │   ├── lib/                   # components (Navbar, Hero, EventsSection, StudiosSection...)
    │   │   └── supabaseClient.js  # browser-side Supabase client
    │   └── routes/
    │       ├── events/            # events list
    │       ├── studios/           # studios list
    │       ├── artists/           # artists
    │       ├── login/             # authentication
    │       └── admin/             # protected dashboard
    ├── static/                    # images, fonts, video
    └── .storybook/                # Storybook configuration
```

## Getting started

**Requirements:** Node.js 22 and npm, plus a Supabase project.

1. Install dependencies:

   ```sh
   cd discografica-romana
   npm install
   ```

2. Copy `.env.example` to `.env` in the `discografica-romana/` folder and fill in your Supabase credentials (Project Settings → API):

   ```env
   PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
   ```

   `.env` is ignored by git and must never be committed.

3. Start the development server:

   ```sh
   npm run dev
   ```

   The site is available at `http://localhost:5173`.

### Database

The app reads from and writes to these Supabase tables: `events`, `studios`, `artists`, `publications`. Access to the admin area requires a user created in Supabase Auth (Authentication → Users). Configure Row Level Security so that public read access is limited to `events` and `studios`, and write access is restricted to authenticated users.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type checking with `svelte-check` |
| `npm run storybook` | Storybook at `http://localhost:6006` |

## Deployment

The build uses `@sveltejs/adapter-auto`, which picks the right adapter for the hosting platform. On an unsupported platform, replace it with a suitable one. Set the two `PUBLIC_SUPABASE_*` variables in the production environment as well.

## Credits

The cover video (`static/video/1920x1080_orange2.mp4`) and its poster image were created by **Jacopo Mancini**, a member of Discografica Romana. All rights belong to Discografica Romana, and they **may not be used**, copied, modified or distributed by others without written permission. Jacopo's official channels are Instagram [@jacopomancini_ar](https://www.instagram.com/jacopomancini_ar/) and [replayfilmaker.com](https://replayfilmaker.com).

## Logo and trademark

The name, logo and visual identity of **Discografica Romana** are the exclusive property of the label and **may not be used**, copied, modified or distributed, in whole or in part, without written permission. This also applies to forks and derivative projects of this repository: if you reuse the code, remove the logo (`static/images/logo.png`, favicon) and every reference to the brand.

## License

All rights reserved © Discografica Romana. The repository may be browsed, but logos, images, fonts and content may not be reused without permission.
