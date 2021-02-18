<script>
  export let segment;
  export let area;
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
      <a aria-current={segment === undefined ? "page" : undefined} href="/"
        >Archive</a
      >
    </li>
    {#if !area || area !== "footer"}
      <li>
        <a href="#subscribe" on:click|preventDefault={scrollTo}>Subscribe</a>
      </li>
    {/if}
    <li>
      <a aria-current={segment === "about" ? "page" : undefined} href="/about"
        >About</a
      >
    </li>
    <li>
      <a aria-current={segment === "carbon" ? "page" : undefined} href="/carbon"
        >Carbon</a
      >
    </li>
  </ul>
</nav>

<style>
  nav ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* gap: var(--size-600); */
    padding: 0;
    font-size: var(--size-500);
  }

  nav ul li:not(:last-child) {
    margin-inline-end: var(--size-600);
    margin-block-end: var(--size-600);
  }
  nav a {
    font-weight: 700;
  }
</style>
