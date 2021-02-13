<!-- Runs before the component is created -->
<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`carbon.json`);
    const carbon = await res.json();
    let totalCarbon = new Number(carbon.fields.Carbon).toFixed(2);
    return { totalCarbon };
  }
</script>

<script>
  export let totalCarbon;
  import Fathom from "../components/Fathom.svelte";

  import { onMount } from "svelte";

  onMount(async () => {
    const wcb = document.querySelector("#wcb-wrapper");
    const removeChilds = (parent) => {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      }
    };
    removeChilds(wcb);
  });
</script>

<svelte:head>
  <title>Optimised - A fortnightly email about website performance</title>
  <meta
    name="description"
    content="Fortnightly insights into the ways website performance and optimisation can help your customers, your business, and the planet. Subscribe today, and start optimising."
  />
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section>
  <h1 class="heading">Website carbon</h1>
  <p>The total estimated carbon footprint of this website is:</p>
  <p class="bold h3">{totalCarbon} grams</p>
</section>
