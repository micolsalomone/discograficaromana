<script>
  export let events = [];
  export let loading = true;
  export let showAll = true;
  export let maxItems = null; // number | null - if set, limits displayed items on the page

  $: displayed = maxItems && Array.isArray(events) ? events.slice(0, maxItems) : events;

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
      {#if showAll}
        <a href="/events" class="events-all">Vedi tutti gli eventi</a>
      {/if}
    </div>

    {#if loading}
      <p class="muted">Caricamento eventi…</p>
    {:else if displayed.length === 0}
      <p class="muted">Nessun evento disponibile.</p>
    {:else}
      <div class="events-grid" role="list">
        {#each displayed as ev}
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
