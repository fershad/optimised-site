<script>
  import Header from "../components/Header.svelte";
  import Subscribe from "../components/Subscribe.svelte";
  import Footer from "../components/Footer.svelte";
  import Fathom from "../components/Fathom.svelte";
  export let segment;
</script>

<svelte:head>
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<Header {segment} />

<main class="wrapper">
  <slot />
  <Subscribe />
</main>

<Footer {segment} />

<style>
</style>
