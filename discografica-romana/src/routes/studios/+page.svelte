<script lang="ts">
  import StudiosSection from '$lib/StudiosSection.svelte';
  export let data;
</script>

<main>
  <StudiosSection studios={data.studios} />
</main>
