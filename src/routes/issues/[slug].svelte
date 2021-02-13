<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`issues/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { issue: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { baseURL } from "../../../utils/baseURL";
  import "highlight.js/styles/solarized-dark.css";
  import Fathom from "../../components/Fathom.svelte";
  // import SaveOffline from "../../components/saveOffline.svelte";

  export let issue;
  let canonicalURL;

  issue.externalCanonical
    ? (canonicalURL = issue.externalCanonical)
    : (canonicalURL = `${baseURL}/issues/${issue.slug}`);

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
  <title>{issue.title} - Optimised</title>
  <meta name="description" content={issue.description} />
  <link rel="canonical" href={canonicalURL} />
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section>
  <p class="heading">
    Issue #{issue.issue}
  </p>
  <p class="bold" data-color="secondary">
    {issue.formattedDate}
  </p>
  <!-- <SaveOffline /> -->
  <article class="flow">
    {@html issue.html}
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
    background-color: var(--code-background);
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
