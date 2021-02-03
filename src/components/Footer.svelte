<script>
  import Nav from "./Nav.svelte";
  const date = new Date();
  const year = date.getFullYear();
</script>

<footer class="wrapper">
  <Nav />
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
    background: var(--color-light);
    border-top: 2px solid;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }

  p a {
    font-family: var(--heading-font);
    font-size: calc(100% * 0.95);
    font-weight: 700;
    /* background-size: 2ch 4px; */
    /* background-position: 50% 100%; */
  }
</style>
