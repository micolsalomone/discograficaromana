<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from '$lib/Hero.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import EventsSection from '$lib/EventsSection.svelte';
  import StudiosSection from '$lib/StudiosSection.svelte';
  import ContactForm from '$lib/ContactForm.svelte';
  export let data;
</script>

<Hero />

<section id="main" class="container">
  <AboutSection />
  <ContactForm />
  <!-- added studios section on homepage -->
  <StudiosSection studios={data.studios} loading={false} />
  <!-- show only 4 events on the homepage -->
  <EventsSection events={data.events} loading={false} maxItems={4} showAll={true} />
</section>
