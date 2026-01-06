<script lang="ts">
  import EventsSection from '$lib/EventsSection.svelte';
  export let data;
</script>

<section class="container">
  <EventsSection events={data.events ?? []} loading={false} showAll={false} />
</section>
