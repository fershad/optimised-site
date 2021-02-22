<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`issues.json`);
    const issues = await res.json();
    const latest = issues[0];
    return { latest };
  }
</script>

<script>
  export let latest;
  import Fathom from "../components/Fathom.svelte";
  import "highlight.js/styles/solarized-dark.css";
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
  <title>Thanks for subscribing to Optimised</title>
  <meta
    name="description"
    content="Fortnightly insights into the ways website performance and optimisation can help your customers, your business, and the planet. Subscribe today, and start optimising."
  />
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section>
  <h1 class="heading">Subscribed</h1>
  <p>
    Thanks for subscribing to Optmised. The next newsletter will be sent out on <strong
      >{latest.nextIssueDate}</strong
    >. Sit tight, it's not too far away!
  </p>
  <p>
    In the meantime, you can read the last newsletter below or head over to the <a
      href="/">archive page</a
    > to see previous issues.
  </p>
</section>

<section>
  <p class="heading">
    Issue #{latest.issue}
  </p>
  <p class="bold" data-color="secondary">
    <time datetime={latest.date}>{latest.formattedDate}</time>
  </p>
  <article class="flow">
    {@html latest.html}
  </article>
</section>

<style>
  article {
    --flow-space: 2rem;
  }

  @media (min-width: 48rem) {
    article {
      --flow-space: 2.5rem;
    }
  }

  article :global(a) {
    /* background-position: 0% 100%;
    background-size: 100% 4px; */
    font-family: var(--heading-font);
  }

  article :global(code:not(article pre code)) {
    background: var(--code-background);
    color: var(--code-text);
    border-radius: var(--size-300);
    font-size: var(--size-400);
    padding: calc(var(--size-300) / 2) var(--size-300);
  }

  article :global(pre) {
    background: var(--code-background);
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: calc(var(--size-300) / 2);
    overflow-x: auto;
    max-width: min(55rem, 100%);
  }

  article :global(ul, article ol) {
    padding-left: var(--size-300);
    margin: var(--size-300) var(--size-700) var(--size-500);
  }

  article :global(h1) {
    color: var(--article-title-color);
  }

  article :global(.callout) {
    margin-top: calc(var(--flow-space) + ((0.5rem + 2em) / 2));
    margin-left: auto;
    margin-right: auto;
    max-width: clamp(70ch, 90%, 100%);
    padding: calc(1ex + 1.15rem) var(--size-400) 0;
    border: 2px solid var(--color-secondary);
    background: var(--color-secondary-alt);
    position: relative;
  }

  article :global(.callout .title) {
    position: absolute;
    background: var(--color-secondary);
    color: var(--color-light);
    top: calc(((0.5rem + 2ex) * -1));
    left: var(--size-400);
    position: absolute;
    padding: 0.25rem var(--size-500);
  }

  article :global(ul > li, ol > li) {
    margin-bottom: var(--size-300);
  }
</style>
