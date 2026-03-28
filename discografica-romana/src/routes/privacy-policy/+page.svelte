<script>
  import { base } from "$app/paths";
</script>

<section class="privacy-page" aria-label="Privacy Policy">
  <div class="container privacy-inner">
    <p class="privacy-kicker">Informativa Privacy</p>
    <h1>Privacy Policy</h1>
    <p class="privacy-intro">
      Questa informativa descrive come trattiamo i dati inviati tramite il modulo contatti del sito Discografica
      Romana.
    </p>

    <h2>Titolare del trattamento</h2>
    <p>
      Discografica Romana<br />
      Via di Santa Cornelia, 11, 00060 Formello RM<br />
      Email: <a href="mailto:info@discograficaromana.it">info@discograficaromana.it</a>
    </p>

    <h2>Quali dati raccogliamo</h2>
    <p>Raccogliamo esclusivamente i dati inseriti volontariamente nel modulo contatti:</p>
    <ul>
      <li>Nome</li>
      <li>Email</li>
      <li>Messaggio</li>
    </ul>

    <h2>Finalita e base giuridica</h2>
    <p>
      Usiamo questi dati solo per rispondere alla tua richiesta. La base giuridica del trattamento e il tuo consenso,
      espresso tramite la checkbox dedicata nel form.
    </p>

    <h2>Conservazione</h2>
    <p>I dati sono conservati per il tempo necessario a evadere la richiesta e comunque per non oltre 12 mesi.</p>

    <h2>Cookie e analytics</h2>
    <p>
      Questo sito non utilizza strumenti di analytics, profilazione o altri tracciamenti invasivi. Non vengono usati
      cookie di marketing.
    </p>

    <h2>Richiesta cancellazione dati</h2>
    <p>
      In qualsiasi momento puoi richiedere cancellazione, accesso o rettifica dei tuoi dati scrivendo a
      <a href="mailto:info@discograficaromana.it?subject=Richiesta%20cancellazione%20dati">info@discograficaromana.it</a>.
    </p>

    <p class="privacy-updated">Ultimo aggiornamento: 28 marzo 2026.</p>

    <p class="privacy-back">
      <a href={`${base}/#contatti`}>Torna alla home</a>
    </p>
  </div>
</section>

<style>
  .privacy-page {
    padding: 3.5rem 0 4.5rem;
  }

  .privacy-inner {
    max-width: 900px;
  }

  .privacy-kicker {
    margin: 0;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.8rem;
    font-weight: 700;
  }

  h1 {
    margin: 0.45rem 0 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.02;
  }

  .privacy-intro {
    color: rgba(236, 239, 241, 0.86);
    font-size: 1.1rem;
  }

  h2 {
    margin: 1.7rem 0 0.55rem;
    font-size: 1.35rem;
  }

  p,
  li {
    color: rgba(236, 239, 241, 0.86);
    line-height: 1.58;
  }

  ul {
    margin: 0.5rem 0 0.75rem;
    padding-left: 1.2rem;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  a:hover {
    color: #ffe09a;
  }

  .privacy-updated {
    margin-top: 2rem;
    color: rgba(236, 239, 241, 0.65);
    font-size: 0.94rem;
  }

  .privacy-back {
    margin-top: 0.7rem;
  }
</style>
