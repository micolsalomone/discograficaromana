<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  const posterSrc = `${base}/images/poster.jpeg`;
  const videoSrc = `${base}/video/1920x1080_orange2.mp4`;

  let heroVideo: HTMLVideoElement | undefined;
  let shouldRenderVideo = true;
  let isVideoPlaying = false;
  let autoplayFallbackTimeout: ReturnType<typeof window.setTimeout> | undefined;

  function clearAutoplayFallback() {
    if (autoplayFallbackTimeout) {
      window.clearTimeout(autoplayFallbackTimeout);
      autoplayFallbackTimeout = undefined;
    }
  }

  function markVideoAsPlaying() {
    isVideoPlaying = true;
    shouldRenderVideo = true;
    clearAutoplayFallback();
  }

  function fallbackToPoster() {
    shouldRenderVideo = false;
    isVideoPlaying = false;
    clearAutoplayFallback();
  }

  onMount(() => {
    if (!heroVideo) {
      return;
    }

    const handlePlaybackStart = () => {
      markVideoAsPlaying();
    };

    const handlePlaybackError = () => {
      fallbackToPoster();
    };

    heroVideo.defaultMuted = true;
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("webkit-playsinline", "true");

    heroVideo.addEventListener("playing", handlePlaybackStart);
    heroVideo.addEventListener("canplay", handlePlaybackStart);
    heroVideo.addEventListener("loadeddata", handlePlaybackStart);
    heroVideo.addEventListener("error", handlePlaybackError);

    autoplayFallbackTimeout = window.setTimeout(() => {
      if (!isVideoPlaying) {
        fallbackToPoster();
      }
    }, 1800);

    heroVideo.play().catch(() => {
      fallbackToPoster();
    });

    return () => {
      clearAutoplayFallback();
      heroVideo?.removeEventListener("playing", handlePlaybackStart);
      heroVideo?.removeEventListener("canplay", handlePlaybackStart);
      heroVideo?.removeEventListener("loadeddata", handlePlaybackStart);
      heroVideo?.removeEventListener("error", handlePlaybackError);
    };
  });
</script>

<section class="hero-minimal" aria-label="Hero">
  <img class="hero-poster" src={posterSrc} alt="" aria-hidden="true" />

  {#if shouldRenderVideo}
    <video
      bind:this={heroVideo}
      class:hero-video-hidden={!isVideoPlaying}
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
