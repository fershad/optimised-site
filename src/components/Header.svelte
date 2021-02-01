<script>
  // export let segment;
  import Nav from "./Nav.svelte";
</script>

<header class="text-center wrapper">
  <h1>Optimised</h1>
  <p class="subtag">
    Tips, insights, and articles to help you boost your site's performance.
  </p>
  <Nav />
</header>

<style>
  h1 {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    display: block;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(90deg, #aa873c, #aa873c);
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 100%;
    margin-bottom: var(--size-600);
    font-size: var(--size-major);
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .subtag {
    font-size: var(--size-600);
  }
</style>
