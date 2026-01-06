<script>
  import { onMount } from "svelte";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#eventi", label: "Eventi" },
    { href: "#artisti", label: "Artisti" },
    { href: "#studi", label: "Studi" },
    { href: "#pubblicazioni", label: "Pubblicazioni" },
    { href: "#contatti", label: "Contatti" },
  ];

  let isOpen = false;
  let isDark = true;

  onMount(() => {
    isDark = !document.documentElement.classList.contains("light");
  });

  function toggleTheme() {
    document.documentElement.classList.toggle("light");
    isDark = !document.documentElement.classList.contains("light");
  }
</script>

<nav class="navbar" aria-label="Main">
  <div class="nav-inner container">
    <a href="/" class="brand" aria-label="Home">
      <img src="/images/logo.png" alt="Discografica Romana" class="brand-img" height="60px" />
    </a>

    <div class="navlinks desktop">
      {#each navLinks as link}
        <a href={link.href} class="navlink">{link.label}</a>
      {/each}
    </div>

    <div class="nav-controls">
      <button class="icon-btn" type="button" aria-label="Toggle theme" on:click={toggleTheme}>
        {#if isDark}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
        {/if}
      </button>

      <button class="icon-btn mobile-toggle" type="button" aria-label="Toggle menu" on:click={() => (isOpen = !isOpen)}>
        {#if isOpen}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        {:else}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        {/if}
      </button>
    </div>
  </div>

  {#if isOpen}
    <div class="mobile-menu">
      <div class="mobile-links container">
        {#each navLinks as link}
          <a href={link.href} class="navlink mobile-link" on:click={() => (isOpen = false)}>{link.label}</a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  /* mantenute le regole locali minime; la classe .brand-img è definita in App.css */
  .nav-inner { display:flex; align-items:center; justify-content:space-between; gap:1rem; }
  .brand { text-decoration: none; display:flex; align-items:center; }
  .nav-controls { display:flex; align-items:center; gap:0.5rem; }
  .icon-btn { background:transparent; border:0; color:var(--muted); padding:0.4rem; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
  .icon-btn:hover { color:var(--text); background: rgba(255,255,255,0.02); }
  .mobile-toggle { display:none; }

  @media (max-width: 800px) {
    .desktop { display:none; }
    .mobile-toggle { display:inline-flex; }
  }
</style>