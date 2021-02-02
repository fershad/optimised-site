<script>
  export let segment;
  //   let behavior = "smooth";

  //   // Grab the prefers reduced media query.
  // const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  // // Check if the media query matches or is not available.
  // if (!mediaQuery || mediaQuery.matches) {
  //   behavior =
  // } else {
  //   behavior = "smooth"
  // }

  function scrollTo({ target }) {
    document.querySelector(target.getAttribute("href")).scrollIntoView({
      behavior: "auto",
    });
  }
</script>

<nav role="navigation">
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >Archive</a
      >
    </li>
    <li>
      <a href="#subscribe" on:click|preventDefault={scrollTo}>Subscribe</a>
    </li>
    <!-- <li>RSS</li> -->
    <!-- <li>Dark mode</li> -->
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: var(--size-600);
    padding: 0;
    font-size: var(--size-500);
  }

  nav a {
    font-weight: 700;
  }
</style>
