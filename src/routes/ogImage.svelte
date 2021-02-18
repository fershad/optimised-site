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
  <p class="twitter">@fershad</p>
</section>

<style>
  section {
    height: 100%;
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 60px;
  }

  h1 {
    grid-row: 1;
    grid-column: 1/-2;
    justify-self: center;
    align-self: center;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(
      var(--color-primary-alt),
      var(--color-primary-alt)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 90%;
    margin: 0 auto var(--size-600) auto;
    font-size: var(--size-major);
    font-family: var(--heading-font);
    font-weight: 900;
  }

  .twitter {
    grid-row: 2;
    grid-column: 3;
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
