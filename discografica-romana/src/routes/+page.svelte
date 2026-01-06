<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from '$lib/Hero.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import EventsSection from '$lib/EventsSection.svelte';
  export let data;
</script>

<section class="container">
  <Hero />
  <AboutSection />
  <EventsSection events={data.events} loading={false} />
</section>
