<script>
  // no script needed for static content
</script>

<section id="chi-siamo" class="about-section">
  <div class="container about-inner">
    <div class="about-grid">
      <div class="about-content">
        <span class="eyebrow">Chi Siamo</span>
        <h2 class="about-title">
  Il nostro obiettivo è rendere trasparente e accessibile il processo creativo,
  offrendo <span class="text-accent">spazi</span>, <span class="text-accent">metodi</span> e <span class="text-accent">competenze</span>.
</h2>
        <p class="lead">
Discografica Romana è un ecosistema culturale in cui la produzione musicale indipendente diventa sostenibile, 
          condivisa e tecnicamente evoluta.
        </p>
        <p class="lead">
          Un luogo in cui produrre, sperimentare e pubblicare senza dipendere da logiche speculative.
        </p>
        <p class="lead">Trasformiamo Roma in un centro di sperimentazione sonora riconosciuto e replicabile.</p>

        <div class="about-stats">
          <div class="stat">
            <div class="stat-num">25+</div>
            <div class="stat-label">Artisti</div>
          </div>
          <div class="stat">
            <div class="stat-num">100+</div>
            <div class="stat-label">Release</div>
          </div>
          <div class="stat">
            <div class="stat-num">4</div>
            <div class="stat-label">Studi</div>
          </div>
        </div>
      </div>

      <div class="about-media">
        <div class="media-overlay" aria-hidden="true"></div>
        <img src="/recording-studio-dark-moody-vinyl-records-analog-e.jpg" alt="Studio di registrazione Discografica Romana" />
      </div>
    </div>
  </div>
</section>

<style>
  :global(.about-section) { padding: 6rem 0; }
  /* ensure anchor scroll lands below the fixed navbar */
  :global(#chi-siamo) { scroll-margin-top: var(--topbar-height, 72px); }
  .about-inner { max-width: var(--container-width); margin: 0 auto; padding: 0 2rem; }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center; }
  @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } .about-media { order: -1; } }

  .eyebrow { display:inline-block; color: var(--accent-2); font-weight:700; letter-spacing:0.14em; text-transform:uppercase; font-size:0.78rem; }
  .about-title { margin: 0.6rem 0 0.8rem; font-size: clamp(1.75rem, 3.6vw, 2.5rem); line-height:1.05; color: var(--text); font-weight:800; }
  .lead { color: var(--muted); margin: 0.6rem 0; font-size:1.05rem; line-height:1.6; }

  .about-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 1.5rem; }
  @media (max-width: 640px) { .about-stats { grid-template-columns: repeat(3, minmax(0,1fr)); } }
  .stat-num { font-size: 1.75rem; font-weight:800; color: var(--accent); }
  .stat-label { font-size: 0.9rem; color: var(--muted); margin-top: 0.3rem; }

  .about-media { position: relative; border-radius: calc(var(--radius)); overflow: hidden; height: 100%; min-height: 320px; }
  .about-media img { width: 100%; height: 100%; object-fit: cover; display:block; }
  .media-overlay { position: absolute; inset:0; background: linear-gradient(145deg, rgba(255,90,122,0.08), transparent 40%); pointer-events: none; }

</style>