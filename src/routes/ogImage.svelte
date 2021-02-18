<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  let title = $page.query.title;
  let issue = $page.query.issue;
</script>

<svelte:head>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section>
  <p class="heading">
    Optimised
    {#if issue}
      - Issue #{issue}
    {/if}
  </p>
  <h1>{title}</h1>
  <hr />
  <p class="twitter">@fershad</p>
</section>

<style>
  section {
    height: 100%;
    width: 100%;
    margin: 0;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-rows: 1fr auto 60px;
  }

  h1 {
    grid-row: 1;
    /* grid-column: 1/-1; */
    display: block;
    justify-self: center;
    align-self: flex-end;
    text-align: center;
    font-size: var(--size-major);
    font-family: var(--heading-font);
    font-weight: 900;
    padding: 0 var(--size-300);
  }

  hr {
    background-image: linear-gradient(
        var(--color-primary-alt),
        var(--color-primary-alt)
      ),
      linear-gradient(var(--color-primary), var(--color-primary)),
      linear-gradient(var(--color-secondary), var(--color-secondary)),
      linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
    background-repeat: no-repeat;
    background-position: 0% 100%, 25% 100%, 50% 100%, 75% 100%;
    background-size: 35px 100%;
    height: var(--size-600);
    border: none;
    width: 200px;
    margin-block: var(--size-700);
    grid-row: 2/3;
    display: block;
    /* grid-column: 1/-1; */
  }

  .twitter {
    grid-row: 3;
    /* grid-column: 3; */
    font-size: var(--size-600);
    text-align: right;
  }

  :global(.wrapper) {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: var(--size-major) 0;
  }
</style>
