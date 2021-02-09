<script>
  import Nav from "./Nav.svelte";
  import { onMount } from "svelte";

  let Badge;

  const date = new Date();
  const year = date.getFullYear();
  export let segment;

  onMount(async () => {
    const module = await import("./carbonBadge.svelte");
    Badge = module.default;
  });
</script>

<footer class="wrapper">
  <svelte:component this={Badge} />
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
    background: var(--color-light);
    border-top: 2px solid;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }
</style>
