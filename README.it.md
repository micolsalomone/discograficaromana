# Discografica Romana

**[English](README.md)** · 🇮🇹 Italiano

Sito web ufficiale di **Discografica Romana**: una landing page statica che presenta la filiera musicale completa dell'etichetta (studi, produzione, eventi) e raccoglie i contatti di chi vuole proporre un progetto.

🌐 **Online:** [discograficaromana.it](https://discograficaromana.it)

> Questo è il branch `landing-page`: contiene la landing page statica in produzione.
> Il branch `main` ospita la versione completa dell'applicazione (eventi, studi, area admin con Supabase).

## Stack

| Ambito | Tecnologia |
| --- | --- |
| Framework | [SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev) |
| Linguaggio | TypeScript |
| Stile | [Tailwind CSS 4](https://tailwindcss.com) |
| Icone | [lucide-svelte](https://lucide.dev) |
| Build | `@sveltejs/adapter-static` (output completamente statico) |
| Form contatti | [Formspree](https://formspree.io) |
| Component dev | Storybook 10 |
| Hosting | GitHub Pages con dominio personalizzato |

## Struttura del repository

```
.
├── .github/workflows/deploy.yml   # CI/CD verso GitHub Pages
└── discografica-romana/           # applicazione SvelteKit
    ├── src/
    │   ├── lib/                   # componenti: Navbar, Hero, AboutSection,
    │   │                          #   StatsSection, ContactForm, Footer
    │   └── routes/                # pagine: home e privacy-policy
    ├── static/                    # immagini, font, CNAME
    └── .storybook/                # configurazione Storybook
```

## Sviluppo locale

**Requisiti:** Node.js 22 (la stessa versione usata dalla CI) e npm.

```sh
cd discografica-romana
npm install
npm run dev
```

Il sito è disponibile su `http://localhost:5173`.

### Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo con hot reload |
| `npm run build` | Build statica nella cartella `build/` |
| `npm run preview` | Anteprima locale della build |
| `npm run check` | Controllo tipi con `svelte-check` |
| `npm run storybook` | Storybook su `http://localhost:6006` |

## Form contatti

Il form in homepage invia i dati a Formspree tramite un endpoint pubblico definito in [`ContactForm.svelte`](discografica-romana/src/lib/ContactForm.svelte). Non servono variabili d'ambiente né chiavi API.

## Deploy

Ogni push su `landing-page` avvia il workflow [`deploy.yml`](.github/workflows/deploy.yml), che:

1. installa le dipendenze (`npm ci`);
2. genera la build statica (`npm run build`);
3. pubblica il contenuto di `build/` sul branch `gh-pages`, servito da GitHub Pages.

Il dominio personalizzato è configurato tramite il file [`static/CNAME`](discografica-romana/static/CNAME).

## Privacy

Il sito non usa cookie di profilazione. Le informazioni sul trattamento dei dati inviati tramite il form sono nella pagina `/privacy-policy`.

## Logo e marchio

Il nome, il logo e l'identità visiva di **Discografica Romana** sono di proprietà esclusiva dell'etichetta e **non possono essere utilizzati**, copiati, modificati o distribuiti, in tutto o in parte, senza autorizzazione scritta. Questo vale anche per i fork e per i progetti derivati di questo repository: se riutilizzi il codice, rimuovi il logo (`static/images/logo.png`, `discografica_profilo.png`, favicon) e ogni riferimento al marchio.

## Licenza

Tutti i diritti riservati © Discografica Romana. Il repository è consultabile, ma loghi, immagini, font e contenuti non sono riutilizzabili senza autorizzazione.
