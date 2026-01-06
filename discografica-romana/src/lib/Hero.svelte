<script>
  // minimal hero with video background
</script>

<section class="hero-minimal" aria-label="Hero">
  <video class="hero-video" autoplay muted loop playsinline poster="/images/hero-poster.jpg">
    <source src="/videos/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div class="hero-overlay">
    <div class="hero-content container">
      <h1 class="hero-title">Dove la musica prende forma</h1>
      <p class="hero-sub">Hub creativo che collega studi, artisti indipendenti e produzioni analogiche.</p>

      <div class="hero-actions">
        <a class="btn primary" href="/events" role="button">Scopri gli Eventi</a>
        <a class="btn" href="/about" role="button">Conosci il Collettivo</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-minimal {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .hero-overlay {
    position: relative;
    z-index: 2;
    padding: 2rem;
    text-align: center;
    color: white;
  }

  .hero-title {
    margin: 0 0 1rem;
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hero-sub {
    margin: 0 0 2rem;
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .btn.primary {
    background: linear-gradient(90deg, var(--accent, #ff5a7a), var(--accent-2, #7bd389));
    color: #111;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 640px) {
    .hero-title {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
    }

    .hero-sub {
      font-size: 1.5rem;
    }
  }
</style>