<!-- Runs before the component is created -->
<script context="module">
  export function preload() {
    return this.fetch(`series/summary.json`)
      .then((r) => r.json())
      .then((series) => {
        return { series };
      });
  }
</script>

<script>
  export let series;
  import Fathom from "../components/Fathom.svelte";
  import Metadata from "../components/Metadata.svelte";

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

  export let pageTitle = "Series";
  export let pageDescription =
    "A collection of the series we've covered in the Optimised newsletter.";
</script>

<Metadata {pageTitle} {pageDescription} />

<svelte:head>
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section>
  <h1 class="heading">Series</h1>
  <p>
    A collection of series that have been published for the Optimised
    newsletter.
  </p>
  <ul role="list">
    {#each series as s}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      <!-- content here -->
      <li class="article">
        <small class="details"
          ><strong class="issueNo" data-color="secondary"
            >{s.issueCount} Issues</strong
          ></small
        >

        <a rel="prefetch" href="/series/{s.slug}">{s.title}</a>
        <p>{s.excerpt}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  li {
    max-width: 100%;
  }
  .article {
    margin: var(--size-500) 0;
    padding: var(--size-400) 0;
  }

  .article:not(:last-child) {
    border-bottom: 2px dashed;
  }

  /* .article .title {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: var(--size-500);
    margin-bottom: var(--size-500);
  } */

  /* .tag {
    font-size: calc(var(--size-300) * 0.75);
    text-transform: uppercase;
    font-weight: 700;
    background-color: var(--color-light-alt);
    border: 2px solid var(--color-primary);
    padding: calc(var(--size-300) * 0.5) calc(var(--size-500) * 0.5);
    position: relative;
    z-index: 1;
    margin-inline-end: var(--size-400);
  } */

  /* .tag:last-child {
    margin-inline-end: 0;
  } */

  .article a:first-of-type {
    font-size: var(--size-600);
    font-family: var(--heading-font);
    font-weight: 700;
  }

  .article a:first-of-type + p {
    margin-top: var(--size-400);
  }

  .details {
    margin-bottom: calc(var(--size-300) * 0.25);
    display: block;
  }

  .details > .issueNo {
    font-family: var(--heading-font);
  }

  @media (min-width: 36rem) {
    .article a:first-of-type {
      font-size: var(--size-700);
    }
  }
</style>
