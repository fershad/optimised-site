<script>
  // export let segment;
  import Nav from "./Nav.svelte";
  export let segment;
</script>

<header class="text-center wrapper">
  <p class="title">Optimised</p>
  <p class="subtag">
    Tips, insights, and articles to help you boost your site's performance.
  </p>
  <Nav {segment} />
</header>

<style>
  .title {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    display: block;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(
      90deg,
      var(--color-primary-alt),
      var(--color-primary-alt)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 100%;
    margin: 0 auto var(--size-600) auto;
    font-size: var(--size-major);
  }

  header {
    justify-content: center;
    align-items: center;
    padding: var(--size-500) var(--size-400);
    overflow: visible;
    background: var(--color-light);
    border-bottom: 2px solid;
  }

  .subtag {
    font-size: var(--size-600);
  }
</style>
