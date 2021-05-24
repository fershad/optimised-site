<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`series/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { series: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { baseURL } from "../../../utils/baseURL";
  import Fathom from "../../components/Fathom.svelte";
  import Metadata from "../../components/Metadata.svelte";
  import ShareButton from "../../components/ShareButton.svelte";

  export let series;
  export let currentTime = new Date();
  const getIssueDate = (issue) => {
    return new Date(issue);
  };

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

  export let pageTitle = series.title;
  export let pageDescription = series.description;
</script>

<Metadata {pageTitle} {pageDescription} />

<svelte:head>
  <link rel="author" href="https://www.fershad.com/about" />
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section>
  <p class="heading">
    Series: {series.title}
  </p>
  <p>{series.excerpt}</p>
  <p class="bold" data-color="">
    This series has {series.issueCount} issues.
  </p>
  <!-- <SaveOffline /> -->
  <ul role="list">
    {#each series.issueData as issue}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      {#if getIssueDate(issue.date) < currentTime}
        <!-- content here -->
        <li class="article">
          <small class="details"
            ><strong class="issueNo" data-color="secondary"
              >Issue #{issue.issue}</strong
            >
            | <time datetime={issue.date}>{issue.formattedDate}</time></small
          >

          <a rel="prefetch" href="/issues/{issue.slug}">{issue.title}</a>
          <!-- <div class="title">
             <div class="tags">
               {#each issue.tags as tag}
                 <span class="tag">{tag}</span>
               {/each}
             </div>
           </div> -->
          <p>{issue.excerpt}</p>
        </li>
      {/if}
    {/each}
  </ul>
  <ShareButton />
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
