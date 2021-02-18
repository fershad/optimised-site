<!-- Runs before the component is created -->
<script context="module">
  export async function preload({ params, query }) {
    let res;
    let progress;
    let carbon;

    try {
      res = await this.fetch(
        "https://optimised.email/.netlify/functions/getTotalCarbon"
      );
    } catch {
      try {
        carbon = await res.json();
      } catch {
        res = await this.fetch(`carbon.json`);
        console.log("using precached");
        carbon = await res.json();
      }

      let totalCarbon = new Number(carbon.fields.Carbon).toFixed(2);
      let lastUpdate = new Date(carbon.fields.lastUpdated);
      progress = "done";
      return { totalCarbon, lastUpdate, progress };
    }

    try {
      carbon = await res.json();
    } catch {
      res = await this.fetch(`carbon.json`);
      console.log("using precached");
      carbon = await res.json();
    }

    let totalCarbon = new Number(carbon.fields.Carbon).toFixed(2);
    let lastUpdate = new Date(carbon.fields.lastUpdated);
    progress = "done";
    return { totalCarbon, lastUpdate, progress };
  }
</script>

<script>
  export let totalCarbon;
  export let lastUpdate;
  export let progress;

  import { fade } from "svelte/transition";

  import Fathom from "../../components/Fathom.svelte";

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
  import Metadata from "../../components/Metadata.svelte";

  export let pageTitle = "Carbon";
  export let pageDescription =
    "Information about the total carbon emissions of the Optimised website.";
</script>

<Metadata {pageTitle} {pageDescription} />
<svelte:head>
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section>
  <h1 class="heading">Website carbon</h1>
  <p>
    The total estimated carbon footprint of this website over its lifetime is:
  </p>
  {#if progress === "done"}
    <div in:fade>
      <p class="bold h3">{totalCarbon} grams</p>
      <small>Last update: <time datetime={lastUpdate}>{lastUpdate}</time></small
      >
    </div>
  {:else}
    <p class="bold h3" in:fade>Fetching data ...</p>
  {/if}
</section>

<section class="flow">
  <h2 class="heading">FAQ</h2>
  <h3>Where does this number come from?</h3>
  <div>
    <p>
      At the bottom of every page on this website is a <em
        >Website Carbon badge</em
      >. It uses the <a href="//websitecarbon.com">Wesbite Carbon calculator</a>
      by Wholegrain Digital to give an estimate of the carbon emissions produced
      by a given page.
    </p>
    <p>
      For each page view I save the estimated carbon emissions to an Airtable
      base. This allows me to sum all estimated emissions over the life of the
      site, and generate a esimate of the website's total emissions.
    </p>
  </div>
  <h3>How accurate is this estimate?</h3>
  <div>
    <p>
      I consider the estimate above to be the <em>minimum</em> total carbon emissions
      of this website. There are a few reasons for that:
    </p>
    <ul>
      <li>
        The Website Carbon calculator uses the total initial page size to
        calculate carbon emissions. This therefore won't include an lazy-loaded
        resources.
      </li>
      <li>
        Calculating and saving emissions data is reliant on JavaScript. No data
        is captured for users who have JavaScript disabled, or for whom the
        script fails to load/execute.
      </li>
      <li>
        It does not take into account the emissions associated with website
        development.
      </li>
      <li>
        It does not include emissions that result from composing and sending the
        email newsletter.
      </li>
    </ul>
  </div>
</section>

<style>
  section {
    --flow-space: 2rem;
  }

  @media (min-width: 48rem) {
    section {
      --flow-space: 2.5rem;
    }
  }

  ul {
    padding-left: var(--size-300);
    margin: var(--size-300) var(--size-700) var(--size-500);
  }

  ul > li {
    margin-bottom: var(--size-300);
  }
</style>
