<script lang="ts">
  import { Mic, Music, Headphones, Radio } from "lucide-svelte";
  export let studios: any[] = []; // passed from server load
  export let loading: boolean = false;

  const icons = [Mic, Music, Headphones, Radio];
</script>

<section id="studi" class="py-16">
  <div class="container">
    <div class="text-center mb-12">
      <span class="eyebrow">Studi</span>
      <h2 class="about-title">I nostri spazi</h2>
      <p class="lead">Quattro ambienti unici pensati per ogni fase del processo creativo</p>
    </div>

    {#if loading}
      <div class="text-center py-12">Caricamento…</div>
    {:else if !studios || studios.length === 0}
      <div class="text-center py-12">Nessuno studio trovato.</div>
    {:else}
      <div class="grid md:grid-cols-2 gap-8">
        {#each studios as studio, idx}
          <article class="event-card group overflow-hidden">
            <div class="grid sm:grid-cols-2">
              <div class="aspect-[5/3] sm:aspect-auto overflow-hidden">
                <img src={studio.image_url ?? studio.image ?? '/placeholder.svg'} alt={studio.name} class="event-image" />
              </div>

              <div class="card-body p-6 flex flex-col justify-center">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 rounded-full" style="background: rgba(255,90,122,0.08); display:flex; align-items:center; justify-content:center;">
                    <svelte:component this={icons[idx % icons.length]} class="h-5 w-5" />
                  </div>
                  <h3 class="text-xl font-bold">{studio.name}</h3>
                </div>

                <p class="muted mb-4">{studio.description}</p>

                <div class="flex flex-wrap gap-2">
                  {#if Array.isArray(studio.services)}
                    {#each studio.services as service}
                      <span class="text-xs px-2 py-1" style="background: rgba(255,255,255,0.02); border-radius:6px;">{service}</span>
                    {/each}
                  {:else if typeof studio.services === 'string'}
                    <!-- try parse json string -->
                    {#if (() => { try { JSON.parse(studio.services); return true; } catch { return false; } })()}
                      {#each JSON.parse(studio.services) as service}
                        <span class="text-xs px-2 py-1" style="background: rgba(255,255,255,0.02); border-radius:6px;">{service}</span>
                      {/each}
                    {:else}
                      <span class="text-xs px-2 py-1" style="background: rgba(255,255,255,0.02); border-radius:6px;">{studio.services}</span>
                    {/if}
                  {/if}
                </div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .event-card { background: transparent; border: 1px solid rgba(255,255,255,0.03); border-radius: 12px; overflow:hidden; transition: transform .28s ease, box-shadow .28s ease; }
  .event-card:hover { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(0,0,0,0.35); border-color: rgba(255,255,255,0.06); }
  .event-image { width:100%; height:100%; object-fit:cover; display:block; transition: transform .5s ease; }
  .event-card:hover .event-image { transform: scale(1.03); }
</style>