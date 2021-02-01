<script>
  export let segment;
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
