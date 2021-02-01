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

<div>
  <ul>
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
</div>
