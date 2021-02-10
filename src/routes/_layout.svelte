<script>
  import Header from "../components/Header.svelte";
  import Subscribe from "../components/Subscribe.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<Header {segment} />

<main class="wrapper">
  <slot />
  <Subscribe />
</main>

<Footer {segment} />

<style>
</style>
