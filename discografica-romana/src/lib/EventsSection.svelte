<script>
  export let events = [];
  export let loading = true;

  function formatDate(dt) {
    if (!dt) return '';
    return new Date(dt).toLocaleString(undefined, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<section id="eventi" class="events-section">
  <div class="container">
    <div class="events-header">
      <div>
        <span class="eyebrow">Eventi</span>
        <h2 class="events-title">Prossimi appuntamenti</h2>
      </div>
      <a href="/events" class="events-all">Vedi tutti gli eventi</a>
    </div>

    {#if loading}
      <p class="muted">Caricamento eventi…</p>
    {:else if events.length === 0}
      <p class="muted">Nessun evento disponibile.</p>
    {:else}
      <div class="events-grid" role="list">
        {#each events as ev}
          <article class="event-card" role="listitem" aria-labelledby={"title-" + ev.id}>
            <a href={"/events/" + ev.id} class="event-link" aria-label={ev.title}>
              <div class="event-image-wrap">
                {#if ev.image_url}
                  <img src={ev.image_url} alt={ev.title} class="event-image" />
                {:else}
                  <div class="event-image placeholder" aria-hidden="true"></div>
                {/if}
              </div>
              <div class="card-body">
                <div class="event-meta">
                  <time datetime={ev.start_at}>{formatDate(ev.start_at)}</time>
                  <span class="venue">{ev.location}</span>
                  {#if ev.is_past}
                    <span class="muted" style="margin-left:0.6rem">• passato</span>
                  {/if}
                </div>
                <h3 id={"title-" + ev.id} class="event-title">{ev.title}</h3>
              </div>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  :global(.sr-only) { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

  .events-section { padding: 4rem 0; background: var(--panel); border-top: 1px solid rgba(255,255,255,0.02); }
  .events-header { display:flex; align-items:end; justify-content:space-between; gap:1rem; margin-bottom:1.25rem; flex-wrap:wrap; }
  .events-title { margin:0.35rem 0 0; font-size: clamp(1.75rem, 3.6vw, 2.5rem); font-weight:800; color:var(--text); }
  .events-all { text-decoration:none; font-weight:600; padding:0.5rem 0.75rem; border-radius:999px; border:1px solid rgba(255,255,255,0.04); color:var(--muted); background:transparent; }
  .events-all:hover { color:var(--text); border-color:var(--accent); }

  .events-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:1rem; }
  @media (max-width: 1024px) { .events-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 768px) { .events-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .events-grid { grid-template-columns: 1fr; } }

  .event-card { background: transparent; border: 1px solid rgba(255,255,255,0.03); border-radius: calc(var(--radius)); overflow:hidden; transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease; }
  .event-card:hover { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(0,0,0,0.45); border-color: rgba(255,255,255,0.06); }

  .event-link { display:block; color:inherit; text-decoration:none; height:100%; }
  .event-image-wrap { aspect-ratio: 3/2; overflow:hidden; background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent); }
  .event-image { width:100%; height:100%; object-fit:cover; display:block; transition: transform .5s ease; }
  .event-card:hover .event-image { transform: scale(1.05); }

  .placeholder { background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%); }

  .card-body { padding: 0.75rem 1rem 1rem; }
  .event-meta { display:flex; gap:0.75rem; align-items:center; font-size:0.85rem; color:var(--muted); margin-bottom:0.4rem; }
  .event-title { margin:0; font-size:1rem; font-weight:700; color:var(--text); }

  .muted { color: var(--muted); }
</style>