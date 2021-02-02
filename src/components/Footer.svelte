<script>
  import Nav from "./Nav.svelte";
  const date = new Date();
  const year = date.getFullYear();
</script>

<footer class="wrapper">
  <Nav />
  <p>
    {year} <a href="//fershad.com">Fershad Irani</a>. All rights reserved.
  </p>
</footer>

<style>
  footer {
    margin-top: var(--size-major);
    justify-content: center;
    align-items: center;
    padding: var(--size-500) 0;
    overflow: visible;
    row-gap: var(--size-600);
  }

  footer::after {
    content: "";
    position: absolute;
    width: 100vw;
    border-bottom: 2px solid;
    top: -1rem;
  }
</style>
