<script lang="ts">
  export let studios: any[] = []; // passed from server load
  export let loading: boolean = false;

  let activeStudioId: string | null = null;

  function toggleActive(studioId: string) {
    if (activeStudioId === studioId) {
      activeStudioId = null; // Deseleziona se si clicca di nuovo
    } else {
      activeStudioId = studioId;
    }
  }
</script>

<section id="studi" class="py-16">
  <div class="container studios-wrap">
    <div class="text-center mb-12">
      <span class="eyebrow">Lo spazio</span>
      <h2 class="about-title">Gli studi</h2>
      <p class="lead">Ci trovi all'interno di <a href="/muziki-factory" target="_blank" rel="noopener noreferrer">Muziki Factory</a> a Formello (RM), spazio polifunzionale che accoglie 8 studi, una sala eventi e una fabbrica del Vinile.</p>
    </div>

    {#if loading}
      <div class="text-center py-12">Caricamento…</div>
    {:else if !studios || studios.length === 0}
      <div class="text-center py-12">Nessuno studio trovato.</div>
    {:else}
      <div class="studios-grid-figma">
        {#each studios as studio, i}
          <article class="studio-card-figma" class:active={activeStudioId === studio.id}>
            <!-- Use a real interactive control for toggling (fixes a11y lint) -->
            <button
              type="button"
              class="studio-toggle"
              aria-pressed={activeStudioId === studio.id}
              aria-label={`Visualizza dettagli per ${studio.name}`}
              on:click={() => toggleActive(studio.id)}
            ></button>
            <a href={"/studios/" + (studio.slug ?? studio.id)} class="studio-link" aria-hidden="true" tabindex="-1">
              <img class="studio-img" src={studio.image_url ?? '/placeholder.svg'} alt={studio.name} />
              <div class="overlays"></div>

              <!-- Icona numerica (es. /images/studios/1.png) -->
              <img src={`/images/${i + 1}.png`} alt={`Studio ${i + 1}`} class="number-icon" />

              <div class="card-content">
                <h3 class="studio-title">{studio.name}</h3>
                {#if Array.isArray(studio.services) && studio.services.length}
                  <div class="studio-services">
                    {#each studio.services as service}
                      <span class="service-tag">{service}</span>
                    {/each}
                  </div>
                {/if}
              </div>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>


