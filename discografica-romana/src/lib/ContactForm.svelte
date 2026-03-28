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
  <div class="contact-shell">
    <div class="contact-head">
      <span class="contact-kicker">Contatti</span>
      <h2>Raccontaci il tuo progetto</h2>
      <p>
        Produzione, registrazione, mix, mastering e distribuzione: scrivici qui e ti rispondiamo con una
        proposta concreta.
      </p>
    </div>

    <form class="contact-form" on:submit|preventDefault={handleSubmit} aria-live="polite">
      <div class="field">
        <label for="cf-name">Nome</label>
        <input id="cf-name" name="name" type="text" required bind:value={name} />
      </div>

      <div class="field">
        <label for="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" required bind:value={email} />
      </div>

      <div class="field">
        <label for="cf-message">Messaggio</label>
        <textarea id="cf-message" name="message" required bind:value={message} rows="6"></textarea>
      </div>

      <div class="actions">
        <button type="submit" disabled={loading}>
          {#if loading}Invio in corso…{:else}Invia richiesta{/if}
        </button>
      </div>

      {#if success}
        <p class="success">Messaggio inviato. Ti risponderemo al più presto.</p>
      {/if}

      {#if error}
        <p class="error">Errore: {error}</p>
      {/if}
    </form>
  </div>
</section>

<style>
  #contatti {
    margin: 3rem auto 2rem;
    max-width: 960px;
  }

  .contact-shell {
    border: 1px solid rgba(242, 184, 14, 0.4);
    border-radius: 10px;
    background:
      radial-gradient(circle at 12% 10%, rgba(242, 184, 14, 0.18), transparent 40%),
      linear-gradient(180deg, rgba(15, 17, 19, 0.94), rgba(11, 11, 13, 0.95));
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
    overflow: hidden;
  }

  .contact-head {
    padding: 1.2rem 1.2rem 1rem;
    border-bottom: 1px solid rgba(242, 184, 14, 0.2);
  }

  .contact-kicker {
    display: inline-block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  .contact-head h2 {
    margin: 0;
    color: var(--text);
    font-size: clamp(1.6rem, 3.8vw, 2.6rem);
    line-height: 1.05;
  }

  .contact-head p {
    margin: 0.8rem 0 0;
    color: rgba(236, 239, 241, 0.84);
    font-size: 1.15rem;
    line-height: 1.45;
    max-width: 60ch;
  }

  .contact-form {
    padding: 1.2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.95rem;
  }

  .field {
    display: grid;
    gap: 0.35rem;
  }

  label {
    color: var(--text);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(8, 8, 9, 0.72);
    color: var(--text);
    border-radius: 6px;
    padding: 0.78rem 0.85rem;
    font: inherit;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid rgba(242, 184, 14, 0.8);
    outline-offset: 2px;
    border-color: rgba(242, 184, 14, 0.9);
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }

  .actions {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.2rem;
  }

  button {
    border: 1px solid transparent;
    background: var(--accent);
    color: #141414;
    border-radius: 6px;
    padding: 0.75rem 1.1rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: transform 0.15s ease, filter 0.15s ease;
  }

  button:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  button:disabled {
    opacity: 0.7;
    cursor: default;
    transform: none;
  }

  .success,
  .error {
    margin: 0;
    border-radius: 6px;
    padding: 0.72rem 0.8rem;
    font-weight: 600;
  }

  .success {
    color: #c8ffd7;
    border: 1px solid rgba(137, 211, 159, 0.4);
    background: rgba(68, 163, 95, 0.14);
  }

  .error {
    color: #ffd4db;
    border: 1px solid rgba(224, 94, 120, 0.45);
    background: rgba(146, 30, 53, 0.2);
  }

  @media (max-width: 640px) {
    #contatti {
      margin-top: 2.4rem;
    }

    .contact-head,
    .contact-form {
      padding: 1rem;
    }

    .contact-head p {
      font-size: 1.05rem;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
</style>
