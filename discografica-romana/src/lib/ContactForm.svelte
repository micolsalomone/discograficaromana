<script lang="ts">
  import { PUBLIC_WEB3FORMS_KEY } from '$env/static/public';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let name = '';
  let email = '';
  let message = '';
  let loading = false;
  let success = false;
  let error: string | null = null;

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    success = false;
    error = null;

    const fd = new FormData();
    fd.append('access_key', PUBLIC_WEB3FORMS_KEY ?? '');
    fd.append('subject', 'Contatto da landing');
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd
      });
      const json = await res.json();
      if (res.ok && json.success) {
        success = true;
        name = '';
        email = '';
        message = '';
        dispatch('sent');
      } else {
        error = json.message || JSON.stringify(json);
      }
    } catch (err) {
      error = (err as Error).message;
    } finally {
      loading = false;
    }
  }
</script>

<section id="contatti" aria-label="Contatti">
  <form class="contact-form" on:submit|preventDefault={handleSubmit} aria-live="polite">
    <div>
      <label for="cf-name">Nome</label>
      <input id="cf-name" name="name" type="text" required bind:value={name} />
    </div>

    <div>
      <label for="cf-email">Email</label>
      <input id="cf-email" name="email" type="email" required bind:value={email} />
    </div>

    <div>
      <label for="cf-message">Messaggio</label>
      <textarea id="cf-message" name="message" required bind:value={message} rows="5"></textarea>
    </div>

    <div>
      <button type="submit" disabled={loading}>
        {#if loading}Invio…{:else}Invia{/if}
      </button>
    </div>

    {#if success}
      <p class="success">Messaggio inviato — grazie! Ti risponderemo al più presto.</p>
    {/if}

    {#if error}
      <p class="error">Errore: {error}</p>
    {/if}
  </form>
</section>

<style>
  .contact-form { max-width: 640px; }
  .contact-form input, .contact-form textarea { width: 100%; box-sizing: border-box; }
  .success { color: green; margin-top: .6rem; }
  .error { color: #b00020; margin-top: .6rem; }
</style>
