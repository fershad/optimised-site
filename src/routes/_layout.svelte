<script>
  import Header from "../components/Header.svelte";
  import Subscribe from "../components/Subscribe.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;

  let showSubscription = true;
  let showHeaderFooter = true;

  if (
    segment === "subscribed" ||
    segment === "unsubscribed" ||
    segment === "ogImage"
  ) {
    showSubscription = false;
  }

  if (segment === "ogImage") {
    showHeaderFooter = false;
  }
</script>

{#if showHeaderFooter}
  <!-- content here -->
  <Header {segment} />
{/if}

<main class="wrapper" id="main-content">
  <slot />
  {#if showSubscription}
    <Subscribe />
  {/if}
</main>

{#if showHeaderFooter}
  <Footer {segment} />
{/if}

<style>
</style>
