<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  let selected: 'dashboard' | 'artists' | 'events' | 'studios' | 'publications' = 'dashboard';

  // form models
  let artist = { name: '', slug: '', bio: '', genre: '', image_url: '' };
  let eventItem = { title: '', slug: '', description: '', start_at: '', end_at: '', location: '', image_url: '' };
  let studio = { name: '', slug: '', description: '', image_url: '' };
  let publication = { artist_id: '', title: '', year: '', format: '', cover_url: '' };

  let msg = '';
  let err = '';
  let artists = [];

  onMount(async () => {
    // fetch artists for publication artist_id reference (optional)
    const { data, error } = await supabase.from('artists').select('id,name').order('created_at', { ascending: false }).limit(200);
    if (!error) artists = data ?? [];
  });

  async function createArtist() {
    msg = err = '';
    const { data, error } = await supabase.from('artists').insert([artist]).select();
    if (error) err = error.message;
    else {
      msg = 'Artista creato';
      artist = { name: '', slug: '', bio: '', genre: '', image_url: '' };
      await refreshArtists();
    }
  }

  async function createEvent() {
    msg = err = '';
    // convert datetime-local strings to ISO if present
    const payload = { ...eventItem };
    const { error } = await supabase.from('events').insert([payload]);
    if (error) err = error.message;
    else {
      msg = 'Evento creato';
      eventItem = { title: '', slug: '', description: '', start_at: '', end_at: '', location: '', image_url: '' };
    }
  }

  async function createStudio() {
    msg = err = '';
    const { error } = await supabase.from('studios').insert([studio]);
    if (error) err = error.message;
    else {
      msg = 'Studio creato';
      studio = { name: '', slug: '', description: '', image_url: '' };
    }
  }

  async function createPublication() {
    msg = err = '';
    const payload = { ...publication, year: publication.year ? parseInt(publication.year) : null };
    const { error } = await supabase.from('publications').insert([payload]);
    if (error) err = error.message;
    else {
      msg = 'Pubblicazione creata';
      publication = { artist_id: '', title: '', year: '', format: '', cover_url: '' };
    }
  }

  async function refreshArtists() {
    const { data } = await supabase.from('artists').select('id,name').order('created_at', { ascending: false }).limit(200);
    artists = data ?? [];
  }
</script>

<div class="container admin-shell">
  <aside class="admin-sidebar" aria-label="Admin navigation">
    <h3>Admin</h3>
    <div class="nav">
      <button class:selected={selected === 'dashboard'} on:click={() => (selected = 'dashboard')} class:active={selected === 'dashboard'}>Dashboard</button>
      <button on:click={() => (selected = 'artists')} class:active={selected === 'artists'}>Artists</button>
      <button on:click={() => (selected = 'events')} class:active={selected === 'events'}>Events</button>
      <button on:click={() => (selected = 'studios')} class:active={selected === 'studios'}>Studios</button>
      <button on:click={() => (selected = 'publications')} class:active={selected === 'publications'}>Publications</button>
    </div>
  </aside>

  <main class="admin-main">
    <section class="welcome-card">
      <h1 class="welcome-title">Dashboard</h1>
      <p class="lead">Benvenuto nell'area admin. Usa la sidebar a sinistra per inserire nuovi record (artist, event, studio, publication).</p>
    </section>

    {#if msg}
      <div class="msg success">{msg}</div>
    {/if}
    {#if err}
      <div class="msg error">{err}</div>
    {/if}

    {#if selected === 'artists'}
      <div class="admin-form" aria-labelledby="artists-form">
        <h3 id="artists-form">Inserisci artista</h3>
        <div class="form-row">
          <input class="full" placeholder="Nome" bind:value={artist.name} />
          <input placeholder="Slug" bind:value={artist.slug} />
          <input placeholder="Genere" bind:value={artist.genre} />
          <input placeholder="Image URL" bind:value={artist.image_url} />
          <textarea class="full" placeholder="Bio" bind:value={artist.bio}></textarea>
        </div>
        <div class="form-actions">
          <button class="btn primary" on:click={createArtist}>Crea artista</button>
          <button class="btn ghost" on:click={() => (artist = { name: '', slug: '', bio: '', genre: '', image_url: '' })}>Reset</button>
        </div>
      </div>
    {/if}

    {#if selected === 'events'}
      <div class="admin-form" aria-labelledby="events-form">
        <h3 id="events-form">Inserisci evento</h3>
        <div class="form-row">
          <input placeholder="Titolo" bind:value={eventItem.title} class="full" />
          <input placeholder="Slug" bind:value={eventItem.slug} />
          <input placeholder="Location" bind:value={eventItem.location} />
          <input type="datetime-local" placeholder="Inizio" bind:value={eventItem.start_at} />
          <input type="datetime-local" placeholder="Fine" bind:value={eventItem.end_at} />
          <input placeholder="Image URL" bind:value={eventItem.image_url} />
          <textarea class="full" placeholder="Descrizione" bind:value={eventItem.description}></textarea>
        </div>
        <div class="form-actions">
          <button class="btn primary" on:click={createEvent}>Crea evento</button>
          <button class="btn ghost" on:click={() => (eventItem = { title: '', slug: '', description: '', start_at: '', end_at: '', location: '', image_url: '' })}>Reset</button>
        </div>
      </div>
    {/if}

    {#if selected === 'studios'}
      <div class="admin-form" aria-labelledby="studios-form">
        <h3 id="studios-form">Inserisci studio</h3>
        <div class="form-row">
          <input placeholder="Nome" bind:value={studio.name} class="full" />
          <input placeholder="Slug" bind:value={studio.slug} />
          <input placeholder="Image URL" bind:value={studio.image_url} />
          <textarea class="full" placeholder="Descrizione / servizi (json testo)" bind:value={studio.description}></textarea>
        </div>
        <div class="form-actions">
          <button class="btn primary" on:click={createStudio}>Crea studio</button>
          <button class="btn ghost" on:click={() => (studio = { name: '', slug: '', description: '', image_url: '' })}>Reset</button>
        </div>
      </div>
    {/if}

    {#if selected === 'publications'}
      <div class="admin-form" aria-labelledby="publications-form">
        <h3 id="publications-form">Inserisci pubblicazione</h3>
        <div class="form-row">
          <select bind:value={publication.artist_id} class="full">
            <option value="">Seleziona artista (opzionale)</option>
            {#each artists as a}
              <option value={a.id}>{a.name}</option>
            {/each}
          </select>
          <input placeholder="Titolo" bind:value={publication.title} />
          <input type="number" placeholder="Anno" bind:value={publication.year} />
          <input placeholder="Formato" bind:value={publication.format} />
          <input placeholder="Cover URL" bind:value={publication.cover_url} />
        </div>
        <div class="form-actions">
          <button class="btn primary" on:click={createPublication}>Crea pubblicazione</button>
          <button class="btn ghost" on:click={() => (publication = { artist_id: '', title: '', year: '', format: '', cover_url: '' })}>Reset</button>
        </div>
      </div>
    {/if}
  </main>
</div>

