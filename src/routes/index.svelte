<!-- Runs before the component is created -->
<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`issues.json`);
    const issues = await res.json();
    return { issues };
  }
</script>

<script>
  export let issues;
</script>

<svelte:head>
  <title>Optimised - A fortnightly email about web performance</title>
  <meta
    name="description"
    content="Fortnightly insights into the ways website performance and optimisation can help your customers, your business, and the planet. Subscribe today, and start optimising."
  />
</svelte:head>

<section>
  <h2>Archive</h2>
  <ul role="list">
    {#each issues as issue}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      <li class="article">
        <div class="details">
          <small>Issue #{issue.issue} | {issue.date}</small>
        </div>
        <div class="title">
          <a rel="prefetch" href="issues/{issue.slug}">{issue.title}</a>
          <div class="tags">
            {#each issue.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
        <p>{issue.excerpt}</p>
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
  }

  .article .title {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: var(--size-500);
    margin-bottom: var(--size-500);
  }

  .tag {
    font-size: calc(var(--size-300) * 0.75);
    text-transform: uppercase;
    font-weight: 700;
    background-color: var(--color-light-alt);
    border: 2px solid var(--color-primary);
    padding: calc(var(--size-300) * 0.5) calc(var(--size-500) * 0.5);
    position: relative;
    z-index: 1;
    margin-inline-end: var(--size-400);
  }

  .tag:last-child {
    margin-inline-end: 0;
  }

  .article .title a {
    font-size: var(--size-600);
  }

  @media (min-width: 36rem) {
    .article .title a {
      font-size: var(--size-700);
    }

    .article .title {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
