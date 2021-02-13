<script>
  import Header from "../components/Header.svelte";
  import Subscribe from "../components/Subscribe.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;

  let { hideHeader, hideFooter } = false;
  let showSubscription = true;

  if (
    segment === "subscribed" ||
    segment === "unsubscribed" ||
    segment === "generate-image"
  ) {
    showSubscription = false;
  }
</script>

<Header {segment} />

<main class="wrapper">
  <slot />
  {#if showSubscription}
    <Subscribe />
  {/if}
</main>

<Footer {segment} />

<style>
</style>
