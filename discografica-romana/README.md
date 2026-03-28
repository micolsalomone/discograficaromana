# Discografica Romana - Landing Page

Landing page realizzata con SvelteKit e build statica per deploy su GitHub Pages.

## Requisiti

- Node.js 18+
- npm

## Variabili ambiente

Nel file `.env` serve solo:

```dotenv
PUBLIC_WEB3FORMS_KEY=...
```

Questa chiave viene usata dal form contatti in homepage.

## Sviluppo locale

```sh
npm install
npm run dev
```

## Build statica

```sh
npm run build
npm run preview
```

L'output statico viene generato nella cartella `build` tramite `@sveltejs/adapter-static`.

## Deploy su GitHub Pages

Il deploy è gestito da GitHub Actions su push del branch `landing-page`:

- install dipendenze (`npm ci`)
- build (`npm run build`)
- publish della cartella `build` sul branch `gh-pages`
