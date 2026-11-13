<script lang="ts">
    import './layout.css';
    import '../App.css';
    import { base } from '$app/paths';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<svelte:head>
    <title>Discografica Romana - Filiera del suono, Hub Creativo - Lo spazio delle possibilità</title>
    <meta property="og:title" content="Discografica Romana - Filiera del suono, Hub Creativo - Lo spazio delle possibilità" />
    <link rel="icon" type="image/png" href={`${base}/images/discografica_profilo.png`} />
    <link rel="apple-touch-icon" href={`${base}/images/discografica_profilo.png`} />
</svelte:head>

<Navbar />
<slot />
<Footer />