<script>
  import { onMount, onDestroy } from "svelte";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#eventi", label: "Eventi" },
    { href: "#artisti", label: "Artisti" },
    { href: "#studi", label: "Studi" },
    { href: "#pubblicazioni", label: "Pubblicazioni" },
    { href: "#contatti", label: "Contatti" },
  ];

  let isOpen = false;
  let isScrolled = false;

  function onScroll() {
    if (typeof window === "undefined") return;
    isScrolled = window.scrollY > 8; // soglia: 8px (modificabile)
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll);
    }
  });
</script>

<nav class="navbar" class:scrolled={isScrolled} aria-label="Main">
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

  /* spinge i link verso destra */
  .navlinks.desktop { margin-left: auto; display:flex; gap:1rem; align-items:center; }

  .icon-btn { background:transparent; border:0; color:var(--muted); padding:0.4rem; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
  .icon-btn:hover { color:var(--text); background: rgba(255,255,255,0.02); }
  .mobile-toggle { display:none; }

  /* transition per navbar e logo */
  .navbar {
    transition: padding .22s ease, background .22s ease, box-shadow .22s ease;
  }

  .navbar .brand-img {
    height: 60px;
    transition: height .22s ease, transform .22s ease;
    display:block;
  }

  /* stato ridotto quando scroll oltre soglia */
  .navbar.scrolled {
    padding: 0.35rem 0.75rem;
    backdrop-filter: blur(6px);
  }
  .navbar.scrolled .brand-img {
    height: 40px;
    transform: translateY(-1px);
  }

  @media (max-width: 800px) {
    .desktop { display:none; }
    .mobile-toggle { display:inline-flex; }
    .navbar.scrolled .brand-img { height: 36px; } /* dimensione mobile leggermente più piccola */
  }
</style>