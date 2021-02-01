<script>
  export let segment;
  import { onMount } from "svelte";

  onMount(() => {
    document.querySelectorAll("a").forEach((a) => {
      if (!a.hash || !document.querySelectorAll(a.hash).length) return;

      a.href = window.location.origin + window.location.pathname + a.hash;
    });
  });
</script>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >Archive</a
      >
    </li>
    <li><a href="#subscribe">Subscribe</a></li>
    <!-- <li>RSS</li> -->
    <!-- <li>Dark mode</li> -->
  </ul>
</nav>

<style>
</style>
