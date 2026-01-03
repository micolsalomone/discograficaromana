<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import Hero from '$lib/Hero.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import EventsSection from '$lib/EventsSection.svelte';

  let events = [];
  let loading = true;

  onMount(async () => {
    loading = true;
    // prende solo eventi a partire da ora, ordinati cronologicamente
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .gte('start_at', new Date().toISOString())
      .order('start_at', { ascending: true })
      .limit(12);

    if (error) {
      console.error('Supabase error:', error);
      events = [];
    } else {
      events = data || [];
    }
    loading = false;
  });

  function formatDate(dt) {
    if (!dt) return '';
    return new Date(dt).toLocaleString();
  }
</script>

<section class="container">
  <Hero />
  <AboutSection />
  <EventsSection {events} {loading} />
</section>
