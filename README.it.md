# Discografica Romana

**[English](README.md)** · 🇮🇹 Italiano

Applicazione web di **Discografica Romana**: il sito dell'etichetta con la vetrina di eventi e studi, più un'area riservata per gestire i contenuti (artisti, eventi, studi, pubblicazioni).

> Questo è il branch `main`: l'applicazione completa, con backend Supabase e area admin.
> Il branch `landing-page` contiene invece la landing page statica pubblicata su [discograficaromana.it](https://discograficaromana.it).

## Funzionalità

- **Home** con le sezioni About, Eventi e Studi.
- **Eventi** (`/events`): elenco degli eventi futuri e passati, caricati da Supabase.
- **Studi** (`/studios`): schede degli studi con descrizione e servizi.
- **Artisti** (`/artists`): pagina dedicata agli artisti.
- **Area admin** (`/admin`): dashboard protetta per inserire artisti, eventi, studi e pubblicazioni.
- **Login** (`/login`): accesso con email e password tramite Supabase Auth. Le rotte `/admin` reindirizzano al login se non c'è una sessione valida.

## Stack

| Ambito | Tecnologia |
| --- | --- |
| Framework | [SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev) |
| Linguaggio | TypeScript |
| Stile | [Tailwind CSS 4](https://tailwindcss.com) |
| Icone | [lucide-svelte](https://lucide.dev) |
| Backend e auth | [Supabase](https://supabase.com) (`@supabase/supabase-js`, `@supabase/ssr`) |
| Component dev | Storybook 10 |
| Test | Vitest + Playwright |

## Struttura del repository

```
.
└── discografica-romana/           # applicazione SvelteKit
    ├── src/
    │   ├── hooks.server.ts        # client Supabase lato server + sessione
    │   ├── lib/                   # componenti (Navbar, Hero, EventsSection, StudiosSection...)
    │   │   └── supabaseClient.js  # client Supabase lato browser
    │   └── routes/
    │       ├── events/            # elenco eventi
    │       ├── studios/           # elenco studi
    │       ├── artists/           # artisti
    │       ├── login/             # autenticazione
    │       └── admin/             # dashboard protetta
    ├── static/                    # immagini, font, video
    └── .storybook/                # configurazione Storybook
```

## Avvio in locale

**Requisiti:** Node.js 22 e npm, più un progetto Supabase.

1. Installa le dipendenze:

   ```sh
   cd discografica-romana
   npm install
   ```

2. Crea il file `.env` nella cartella `discografica-romana/` con le credenziali del tuo progetto Supabase (Project Settings → API):

   ```env
   PUBLIC_SUPABASE_URL=https://<tuo-progetto>.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=<la-tua-anon-key>
   ```

   Il file `.env` è ignorato da git e non va mai committato.

3. Avvia il server di sviluppo:

   ```sh
   npm run dev
   ```

   Il sito è disponibile su `http://localhost:5173`.

### Database

L'app legge e scrive queste tabelle Supabase: `events`, `studios`, `artists`, `publications`. Per accedere all'area admin serve un utente creato in Supabase Auth (Authentication → Users). Configura le policy di Row Level Security in modo che la lettura pubblica sia limitata a `events` e `studios` e la scrittura sia riservata agli utenti autenticati.

### Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo con hot reload |
| `npm run build` | Build di produzione |
| `npm run preview` | Anteprima locale della build |
| `npm run check` | Controllo tipi con `svelte-check` |
| `npm run storybook` | Storybook su `http://localhost:6006` |

## Deploy

La build usa `@sveltejs/adapter-auto`, che sceglie l'adapter in base alla piattaforma di hosting. Su una piattaforma non supportata va sostituito con quello adatto. Le due variabili `PUBLIC_SUPABASE_*` vanno configurate anche nell'ambiente di produzione.

## Logo e marchio

Il nome, il logo e l'identità visiva di **Discografica Romana** sono di proprietà esclusiva dell'etichetta e **non possono essere utilizzati**, copiati, modificati o distribuiti, in tutto o in parte, senza autorizzazione scritta. Questo vale anche per i fork e per i progetti derivati di questo repository: se riutilizzi il codice, rimuovi il logo (`static/images/logo.png`, favicon) e ogni riferimento al marchio.

## Licenza

Tutti i diritti riservati © Discografica Romana. Il repository è consultabile, ma loghi, immagini, font e contenuti non sono riutilizzabili senza autorizzazione.
