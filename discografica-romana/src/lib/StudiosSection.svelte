<script lang="ts">
  export let studios: any[] = []; // passed from server load
  export let loading: boolean = false;
</script>

<section id="studi" class="py-16">
  <div class="container">
    <div class="text-center mb-12">
      <span class="eyebrow">Lo spazio</span>
      <h2 class="about-title">Gli studi</h2>
      <p class="lead">Ci trovi all'interno di <a href="/muziki-factory" target="_blank" rel="noopener noreferrer">Muziki Factory</a> a Formello (RM), spazio polifunzionale che accoglie 8 studi, una sala eventi e una fabbrica del Vinile.</p>
    </div>

    {#if loading}
      <div class="text-center py-12">Caricamento…</div>
    {:else if !studios || studios.length === 0}
      <div class="text-center py-12">Nessuno studio trovato.</div>
    {:else}
      <!-- grid inside layout container: 2 col desktop, 1 col mobile; gap between cards -->
      <div class="studios-grid">
        {#each studios as studio}
          <article class="studio-card">
            <a href={"/studios/" + (studio.slug ?? studio.id)} class="studio-link" aria-label={"Apri " + studio.name}>
              <img class="studio-img" src={studio.image_url ?? studio.image ?? '/placeholder.svg'} alt={studio.name} />
              <div class="image-overlay" aria-hidden="true"></div>

              <div class="card-caption">
                <h3 class="studio-title">{studio.name}</h3>
                {#if studio.description}
                  <p class="studio-desc">{studio.description}</p>
                {/if}
                {#if Array.isArray(studio.services) && studio.services.length}
                  <div class="services">
                    {#each studio.services as s}
                      <span class="svc">{s}</span>
                    {/each}
                  </div>
                {/if}
              </div>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  /* Grid: contained in .container, 2 columns on desktop with gap between cards */
  .studios-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem; /* spacing between cards */
    width: 100%;
    /* no full-bleed, remains inside .container */
  }

  @media (max-width: 768px) {
    .studios-grid {
      grid-template-columns: 1fr; /* single column on small screens */
    }
  }

  /* Cards: rounded, subtle border, spaced by grid gap */
  .studio-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px; /* restored radius */
    border: 1px solid rgba(255,255,255,0.03);
    margin: 0;
    display: block;
    width: 100%;
    height: 420px; /* poster-ish height */
    background: var(--panel);
    transition: transform .28s ease, box-shadow .28s ease;
  }

  @media (max-width: 900px) {
    .studio-card { height: 320px; }
  }

  /* clickable area covers whole card */
  .studio-link {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    outline: none;
  }
  .studio-link:focus .card-caption { box-shadow: 0 0 0 3px rgba(242,184,14,0.12); border-radius: 8px; }

  .studio-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    -webkit-user-drag: none;
    transition: transform 450ms cubic-bezier(.2,.8,.2,1), filter 300ms;
    will-change: transform, filter;
  }

  /* overlay for readability (base) */
  .image-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    pointer-events: none;
    background: linear-gradient(to top, rgba(0,0,0,0.62) 6%, rgba(0,0,0,0.38) 28%, rgba(0,0,0,0) 62%);
    transition: background 280ms ease, opacity 280ms ease;
  }

  /* hover / focus interactions */
  .studio-card:hover,
  .studio-link:focus {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.45);
  }
  .studio-card:hover .studio-img,
  .studio-link:focus .studio-img {
    transform: scale(1.04);
    filter: saturate(1.03) contrast(1.02);
  }
  .studio-card:hover .image-overlay,
  .studio-link:focus .image-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.72) 6%, rgba(0,0,0,0.42) 28%, rgba(0,0,0,0) 62%);
  }

  /* Caption overlay positioned at bottom */
  .card-caption {
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    z-index: 3;
    color: #fff;
    padding: 0;
    display: block;
  }

  .studio-title {
    margin: 0 0 0.25rem 0;
    font-size: clamp(1.5rem, 3.2vw, 1.9rem);
    font-weight: 800;
    line-height: 1.02;
    text-shadow: 0 8px 22px rgba(0,0,0,0.5);
  }

  .studio-desc {
    margin: 0 0 0.5rem 0;
    color: rgba(255,255,255,0.95);
    font-size: 0.95rem;
    max-width: 70ch;
  }

  .services { display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.5rem; }
  .svc {
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.95);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-size: 0.78rem;
  }
</style>