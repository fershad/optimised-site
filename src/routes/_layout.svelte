<script>
  import Header from "../components/Header.svelte";
  import Subscribe from "../components/Subscribe.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<Header {segment} />

<main>
  <slot />
</main>

<Subscribe />
<Footer />

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
