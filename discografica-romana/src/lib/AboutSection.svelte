<script>
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";

  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
  ];

  const intervalMs = 4000;
  const fadeMs = 500;

  let currentIndex = 0;
  let intervalId = 0;

  onMount(() => {
    intervalId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, intervalMs);
  });

  onDestroy(() => {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
  });
</script>

<section id="chi-siamo" class="about-section">
  <div class="container about-inner">
    <div class="about-grid">
      <div class="about-content">
        <span class="eyebrow">Chi Siamo</span>
        <h2 class="about-title">
  Il nostro obiettivo è rendere trasparente e accessibile il processo creativo,
  offrendo <span class="text-accent">spazi</span>, <span class="text-accent">metodi</span> e <span class="text-accent">competenze</span>.
</h2>
        <p class="lead">
Discografica Romana è un ecosistema culturale in cui la produzione musicale indipendente diventa sostenibile, 
          condivisa e tecnicamente evoluta.
        </p>

        <div class="about-stats">
          <div class="stat">
            <div class="stat-num">25+</div>
            <div class="stat-label">Artisti</div>
          </div>
          <div class="stat">
            <div class="stat-num">100+</div>
            <div class="stat-label">Release</div>
          </div>
          <div class="stat">
            <div class="stat-num">4</div>
            <div class="stat-label">Studi</div>
          </div>
        </div>
      </div>

      <div class="about-media">
        <div class="about-slideshow" aria-live="polite" aria-label="Galleria immagini Discografica Romana">
          {#key images[currentIndex]}
            <img
              class="about-slide"
              src={images[currentIndex]}
              alt={`Discografica Romana - immagine ${currentIndex + 1} di ${images.length}`}
              in:fade={{ duration: fadeMs }}
              out:fade={{ duration: fadeMs }}
            />
          {/key}
        </div>
        <div class="media-overlay" aria-hidden="true"></div>
        <div class="sr-only" aria-live="polite">Immagine {currentIndex + 1} di {images.length}</div>
      </div>
    </div>
  </div>
</section>
