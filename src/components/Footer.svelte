<script>
  import Nav from "./Nav.svelte";

  const date = new Date();
  const year = date.getFullYear();
  export let segment;
</script>

<footer class="wrapper">
  <div id="wcb-wrapper" />
  <Nav {segment} />
  <p>
    {year} <a href="//fershad.com">Fershad Irani</a>. <br /> All rights reserved.
  </p>
</footer>

<style>
  footer {
    margin-top: calc(var(--size-500) * -1);
    justify-content: center;
    align-items: center;
    padding: var(--size-700) var(--size-400);
    overflow: visible;
    row-gap: var(--size-700);
    background: var(--block-background);
    border-top: 2px solid;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }
</style>
