<script>
  import { onMount } from "svelte";
  let isVisible = false;

  onMount(() => {
    const t = setTimeout(() => (isVisible = true), 100);
    return () => clearTimeout(t);
  });

  const ringSizes = [170, 150, 130, 115, 100, 88, 78];
  const dots = Array.from({ length: 60 });
</script>

<section class="hero-v2">
  <div class="hero-inner">
    <div class="hero-left" class:is-visible={isVisible}>
      <h1 class="hero-title">
        <span class="line-1">Dove la musica</span>
        <span class="line-2">Prende forma</span>
      </h1>

      <p class="lead">Un luogo aperto a chi vuole sperimentare, creare e contaminare.</p>

      <p class="sublead">
        Hub creativo che collega studi di registrazione, produttori di vinili e artisti indipendenti.
        Dove il calore analogico incontra la precisione digitale.
      </p>

      <div class="actions">
        <a class="btn btn-primary" href="/events">
          Scopri gli Eventi
          <svg class="arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/></svg>
        </a>
        <a class="btn btn-outline" href="/about">Conosci il Collettivo</a>
      </div>
    </div>

    <div class="hero-right" class:is-visible={isVisible}>
      <div class="vinyl-wrap">
        <!-- outer dotted ring -->
        <svg viewBox="0 0 400 400" class="vinyl-dots" aria-hidden="true">
          {#each dots as _, i}
            {@const angle = i * 6 * (Math.PI / 180)}
            {@const x = 200 + 190 * Math.cos(angle)}
            {@const y = 200 + 190 * Math.sin(angle)}
            <circle cx={x} cy={y} r="3" fill="currentColor" class="dot"/>
          {/each}
        </svg>

        {#each ringSizes as size, i}
          <div class="ring" style="width:{size*2}px;height:{size*2}px;left:calc(50% - {size}px);top:calc(50% - {size}px); z-index:{100 - i}">
            <div class="ring-fill" style="opacity:{0.9 - i*0.08}"></div>
          </div>
        {/each}

        <div class="label" aria-hidden="true">
          <div class="waveform">
            {#each Array.from({length:8}) as _, i}
              <div class="bar" style="animation-delay:{i * 0.1}s"></div>
            {/each}
          </div>
          <div class="spindle"></div>
        </div>

        <div class="vinyl-shine" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-v2 {
    position: relative;
    min-height: 72vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(255,90,122,0.06), transparent 40%);
    overflow: hidden;
    padding: 4rem 1.5rem;
  }

  .hero-inner {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; padding-bottom: 2rem; }
    .hero-right { order: -1; margin-bottom: 1.5rem; justify-self: center; }
  }

  .hero-left { transform: translateY(16px); opacity: 0; transition: all 900ms cubic-bezier(.2,.9,.2,1); }
  .hero-left.is-visible { transform: translateY(0); opacity: 1; }

  .hero-title { margin:0 0 0.6rem; line-height:1; font-weight:900; font-size: clamp(2rem, 4.8vw, 4.2rem); letter-spacing: -0.02em; text-transform:uppercase; }
  .hero-title .line-1 { display:block; color:var(--text, #eceff1); }
  .hero-title .line-2 { display:block; color:var(--accent, #ff5a7a); font-style:italic; }

  .lead { margin:0 0 0.6rem; color:var(--muted, #9aa0a6); font-size:1.05rem; }
  .sublead { margin:0 0 1rem; color:rgba(255,255,255,0.8); max-width:48ch; }

  .actions { display:flex; gap:0.75rem; margin-top:1rem; flex-wrap:wrap; }

  .btn {
    display:inline-flex;
    align-items:center;
    gap:0.6rem;
    padding:0.65rem 1rem;
    border-radius:999px;
    font-weight:600;
    text-decoration:none;
    transition: transform .18s ease, background .18s ease;
  }
  .btn:active { transform: translateY(1px); }
  .btn-primary {
    background: linear-gradient(90deg,var(--accent,#ff5a7a),var(--accent-2,#7bd389));
    color: #111;
  }
  .btn-outline {
    border:1px solid rgba(255,255,255,0.06);
    color:var(--muted,#9aa0a6);
    background: transparent;
  }
  .arrow { margin-left:6px; transform:translateX(0); transition: transform .18s ease; }
  .btn-primary:hover .arrow { transform: translateX(4px); }

  /* Right / vinyl */
  .hero-right { display:flex; justify-content:flex-end; align-items:center; transition: transform 900ms cubic-bezier(.2,.9,.2,1), opacity 900ms; transform: scale(.92); opacity:0; }
  .hero-right.is-visible { transform: scale(1); opacity:1; }

  .vinyl-wrap {
    position: relative;
    width: 320px;
    height: 320px;
    display:block;
    border-radius:50%;
    transform-origin:center;
    animation: spin-slow 8s linear infinite;
  }
  @media (min-width:640px) { .vinyl-wrap { width:420px; height:420px; } }
  @media (min-width:1024px) { .vinyl-wrap { width:520px; height:520px; } }

  .vinyl-dots { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
  .vinyl-dots .dot { fill: rgba(255,255,255,0.06); }

  .ring { position:absolute; border-radius:50%; border:3px solid rgba(255,255,255,0.03); overflow:hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.25); }
  .ring-fill { position:absolute; inset:0; border-radius:50%; background: linear-gradient(145deg, #2b2b2b, #0f0f0f); }

  .label {
    position:absolute;
    width:120px;
    height:120px;
    left:calc(50% - 60px);
    top:calc(50% - 60px);
    border-radius:50%;
    background: linear-gradient(145deg, #F2B80E 0%, #d9a50d 50%, #c4940b 100%);
    box-shadow: 0 6px 18px rgba(242,184,14,0.28), inset 0 2px 4px rgba(255,255,255,0.2);
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .waveform { display:flex; gap:4px; align-items:flex-end; height:44px; }
  .bar { width:4px; background:#0b0b0b; border-radius:999px; height:100%; animation: waveform 0.8s ease-in-out infinite; transform-origin:center; }

  .spindle {
    width:16px; height:16px; border-radius:50%;
    background:#0b0b0b; position:absolute; left:calc(50% - 8px); top:calc(50% - 8px);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
  }

  .vinyl-shine {
    position:absolute; inset:0; border-radius:50%;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.08) 100%);
    pointer-events:none;
  }

  /* animations */
  @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
  @keyframes waveform { 0%,100%{ transform: scaleY(.3);} 50%{ transform: scaleY(1);} }
</style>