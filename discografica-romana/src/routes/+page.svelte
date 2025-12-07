<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  let events = [];
  let loading = true;

  onMount(async () => {
    loading = true;
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_at', { ascending: false })
      .limit(9);

    if (error) {
      console.error('Supabase error:', error);
      events = [];
    } else {
      events = data || [];
    }
    loading = false;
  });

  function formatDate(dt) {
    if (!dt) return '';
    return new Date(dt).toLocaleString();
  }
</script>

<section class="container">
  <section class="hero">
    <div class="left">
      <h1>Dove la musica prende forma.</h1>
      <p class="lead">Un luogo aperto a chi vuole sperimentare, creare e far vibrare le proprie idee.</p>
      <div style="margin-top:1.2rem;">
        <a class="kicker" href="/events">Scopri gli eventi</a>
      </div>
    </div>

    <div class="right">
      <!-- qui potresti mettere una grafica hero o un'immagine statica -->
      <div style="width:340px;height:220px;border-radius:10px;background:linear-gradient(135deg,var(--accent),transparent);"></div>
    </div>
  </section>

  <h2 style="margin-top:2.5rem;">Eventi in evidenza</h2>

  {#if loading}
    <p>Caricamento...</p>
  {:else if events.length === 0}
    <p>Nessun evento pubblicato.</p>
  {:else}
    <div class="grid" role="list">
      {#each events as ev}
        <article class="card" role="listitem">
          {#if ev.image_url}
            <img src={ev.image_url} alt={ev.title} class="cover" />
          {:else}
            <div class="cover"></div>
          {/if}
          <h3 style="margin:0.4rem 0 0.3rem;">{ev.title}</h3>
          <div class="meta">{formatDate(ev.start_at)} — {ev.location}</div>
        </article>
      {/each}
    </div>
  {/if}
</section>
