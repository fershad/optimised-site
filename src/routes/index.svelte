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

<section data-title="archive">
  <h2>Archive</h2>
  <ul role="list">
    {#each issues as issue}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="issues/{issue.slug}"
          >{issue.title} - {issue.date}</a
        >
      </li>
    {/each}
  </ul>
</section>
