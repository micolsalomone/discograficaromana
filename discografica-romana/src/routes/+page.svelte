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
  <!-- show only 4 events on the homepage -->
  <EventsSection events={data.events} loading={false} maxItems={4} showAll={true} />
</section>
