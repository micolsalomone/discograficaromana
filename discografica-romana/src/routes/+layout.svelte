<script lang="ts">
    import './layout.css';
    import '../App.css';
    import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<slot />
<Footer />