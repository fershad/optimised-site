<script>
  import Nav from "./Nav.svelte";
  import Twitter from "./svgs/twitterLogo.svelte";
  import Github from "./svgs/githubLogo.svelte";
  import Kofi from "./svgs/kofiLogo.svelte";

  const date = new Date();
  const year = date.getFullYear();
  export let segment;

  let area = "footer";
</script>

<footer class="wrapper">
  <div id="wcb-wrapper" />
  <Nav {segment} {area} />
  <p>
    {year} <a href="//fershad.com">Fershad Irani</a>. <br /> All rights reserved.
  </p>
  <div id="social">
    <a href="//twitter.com/fershad">
      <Twitter />
    </a>
    <a href="https://github.com/fershad/optimised-site">
      <Github />
    </a>
    <a href="https://ko-fi.com/fershad">
      <Kofi />
    </a>
  </div>
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

  #social {
    display: flex;
    justify-content: center;
  }
  #social a,
  #social a:visited {
    margin-inline: var(--size-300);
    background-image: linear-gradient(
        var(--color-primary-alt),
        var(--color-primary-alt)
      ),
      linear-gradient(var(--color-primary), var(--color-primary)),
      linear-gradient(var(--color-secondary), var(--color-secondary)),
      linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
    background-repeat: no-repeat;
    background-size: 1.5ch 0.3rem, 3ch 0.3rem, min(5ch, 75%) 0.3rem, 100% 0.3rem;
    background-position: 0% 100%, 0% 100%, 0% 100%, 0% 100%;
    transition: background-image 0.3s ease-in-out,
      background-size 0.4s ease-in-out, color 0.3s ease-out, outline 0.25s;
    overflow: visible;
  }

  #social a:hover,
  #social a:focus {
    background-image: linear-gradient(
        var(--color-primary-alt),
        var(--color-primary-alt)
      ),
      linear-gradient(var(--color-primary), var(--color-primary)),
      linear-gradient(var(--color-secondary), var(--color-secondary)),
      linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
    background-size: calc(100% - 5ch) 4px, calc(100% - 3ch) 4px,
      calc(100% - 1.5ch) 4px, 100% 4px;
    background-position: 0% 100%, 0% 100%, 0% 100%, 0% 100%;
  }
  #social a :global(svg) {
    overflow: visible;
  }
  #social a :global(svg path) {
    fill: var(--link-color);
    transition: transform 0.15s ease-out;
  }

  #social a:hover :global(svg:hover path) {
    /* fill: var(--color-light-alt); */
    transform: translate3d(0, -2px, 0);
  }
</style>
