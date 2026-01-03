<script lang="ts">
  import { supabase } from '$lib/supabaseClient';

  let email = '';
  let password = '';
  let error = '';

  const login = async () => {
    error = '';
    const { error: err } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (err) {
      error = err.message;
    } else {
      window.location.href = '/admin';
    }
  };
</script>

<h1>Login</h1>

<input placeholder="Email" bind:value={email} />
<input type="password" placeholder="Password" bind:value={password} />

<button on:click={login}>Entra</button>

{#if error}
<p>{error}</p>
{/if}
