<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from '$lib/Hero.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import ContactForm from '$lib/ContactForm.svelte';
</script>

<Hero />

<section id="main" class="container">
  <AboutSection />
  <ContactForm />

  <section class="home-cta" aria-label="Contatto diretto email">
    <p class="home-cta-text">
      Oppure scrivici a
      <a href="mailto:info@discograficaromana.it">info@discograficaromana.it</a>
    </p>
  </section>
</section>

<style>
  .home-cta {
    margin: 2rem auto 4rem;
    max-width: 860px;
    border: 1px solid rgba(242, 184, 14, 0.4);
    background: linear-gradient(135deg, rgba(242, 184, 14, 0.12), rgba(242, 184, 14, 0.03));
    border-radius: 10px;
    padding: 1.1rem 1.2rem;
  }

  .home-cta-text {
    margin: 0;
    color: var(--text);
    font-size: clamp(1rem, 2.4vw, 1.25rem);
    line-height: 1.35;
    letter-spacing: 0.02em;
  }

  .home-cta a {
    color: var(--accent);
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid rgba(242, 184, 14, 0.55);
  }

  .home-cta a:hover {
    color: #ffe09a;
    border-bottom-color: #ffe09a;
  }

  .home-cta a:focus-visible {
    outline: 2px solid rgba(242, 184, 14, 0.8);
    outline-offset: 3px;
    border-bottom-color: transparent;
  }
</style>
