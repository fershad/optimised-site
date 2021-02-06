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
  const dayjs = require("dayjs");

  export let issue;
  let canonicalURL;

  issue.externalCanonical
    ? (canonicalURL = issue.externalCanonical)
    : (canonicalURL = `${baseURL}/issues/${issue.slug}`);
</script>

<svelte:head>
  <title>{issue.title} - Optimised</title>
  <meta name="description" content={issue.description} />
  <link rel="canonical" href={canonicalURL} />
</svelte:head>

<section>
  <p class="heading">
    Issue #{issue.issue}
  </p>
  <p class="bold" data-color="secondary">
    {dayjs(issue.date).format("MMMM D, YYYY")}
  </p>
  <article>
    {@html issue.html}
  </article>
</section>

<style>
  article :global(p a) {
    /* background-position: 0% 100%;
    background-size: 100% 4px; */
    font-family: var(--heading-font);
  }

  article :global(code:not(article pre code)) {
    background-color: #83c5be36;
    color: var(--color-primary);
    border-radius: var(--size-300);
    font-size: var(--size-400);
    padding: calc(var(--size-300) / 2) var(--size-300);
  }

  article :global(p a:hover) {
    background-image: linear-gradient(
      var(--color-primary),
      var(--color-primary)
    );
  }
  article :global(pre) {
    background: var(--color-light-alt);
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: calc(var(--size-300) / 2);
    overflow-x: auto;
    max-width: 75ch;
  }

  article :global(ul, article ol) {
    padding-left: var(--size-300);
    margin: var(--size-300) var(--size-700) var(--size-500);
  }

  article :global(h1) {
    color: var(--color-primary);
  }
</style>
