<script>
  import { base } from "$app/paths";

  const stats = [
    { value: "2", label: "Sala prove" },
    { value: "4", label: "Studi di Produzione" },
    { value: "1", label: "Studio Video e Grafica" },
    { value: "2", label: "Studi Mastering" },
    { value: "1", label: "Teatro" },
    { value: "1", label: "Fabbrica del Vinile" },
  ];
</script>

<section id="i-nostri-spazi" class="stats-section" aria-label="Numeri e spazi Discografica Romana">
  <div class="container stats-shell">
    <div class="stats-heading">
      <span class="eyebrow">I Nostri Spazi</span>
      <h2 class="stats-title">Una filiera completa, in un unico ecosistema</h2>
    </div>

    <div class="stats-grid">
      {#each stats as stat}
        <article class="stats-card">
          <div class="stats-figure" aria-hidden="true">
            <img
              class={`stats-digit ${stat.value === "1" ? "is-one" : ""}`}
              src={`${base}/images/numbers/${stat.value}.png`}
              alt=""
              loading="lazy"
            />
          </div>
          <span class="sr-only">{stat.value}</span>
          <p class="stats-label">{stat.label}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
