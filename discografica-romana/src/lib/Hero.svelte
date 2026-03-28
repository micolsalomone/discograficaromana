<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  const posterSrc = `${base}/images/poster.jpg`;
  const videoSrc = `${base}/video/1920x1080_orange2.mp4`;

  let heroVideo: HTMLVideoElement | undefined;
  let shouldRenderVideo = true;
  let shouldUseAutoplayFallback = false;
  let autoplayFallbackTimeout: number | undefined;

  function clearAutoplayFallback() {
    if (autoplayFallbackTimeout) {
      window.clearTimeout(autoplayFallbackTimeout);
      autoplayFallbackTimeout = undefined;
    }
  }

  function fallbackToPoster() {
    shouldRenderVideo = false;
    clearAutoplayFallback();
  }

  onMount(() => {
    if (!heroVideo) {
      return;
    }

    const handlePlaybackError = () => {
      if (shouldUseAutoplayFallback) {
        fallbackToPoster();
      }
    };

    shouldUseAutoplayFallback = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    heroVideo.defaultMuted = true;
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("webkit-playsinline", "true");

    heroVideo.addEventListener("error", handlePlaybackError);

    if (shouldUseAutoplayFallback) {
      autoplayFallbackTimeout = window.setTimeout(() => {
        if (heroVideo && (heroVideo.paused || heroVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA)) {
          fallbackToPoster();
        }
      }, 1800);
    }

    heroVideo.play().catch(() => {
      if (shouldUseAutoplayFallback) {
        fallbackToPoster();
      }
    });

    return () => {
      clearAutoplayFallback();
      heroVideo?.removeEventListener("error", handlePlaybackError);
    };
  });
</script>

<section class="hero-minimal" aria-label="Hero">
  <img class="hero-poster" src={posterSrc} alt="" aria-hidden="true" />

  {#if shouldRenderVideo}
    <video
      bind:this={heroVideo}
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      disablepictureinpicture
      poster={posterSrc}
      aria-hidden="true"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  {/if}

  <div class="hero-overlay">
    <div class="hero-content container">
      <h1 class="hero-title">Lo spazio delle possibilità</h1>
      <p class="lead">Artisti e filiera tecnologica del suono sotto lo stesso tetto.</p>

    </div>

    <!-- scroll indicator (replaced) -->
    <a href="#chi-siamo" class="arrow-container" aria-label="Scorri al contenuto">
      <div class="arrow-2" aria-hidden="true">
        <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v12" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.5 12.5L12 18l5.5-5.5" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </a>
  </div>
</section>
