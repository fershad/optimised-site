<script>
  // export let segment;
  import Nav from "./Nav.svelte";
  import Toggle from "./darkToggle.svelte";
  import SkipLink from "../components/skipLink.svelte";
  export let segment;
  let area = "header";
</script>

<SkipLink />
<header class="text-center wrapper">
  <p class="title">Optimised</p>
  <p class="subtag">
    Tips, insights, and articles to help boost your website's performance.
  </p>
  <Nav {segment} {area} />
  <Toggle />
</header>

<style>
  .title {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    display: block;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(
      var(--color-primary-alt),
      var(--color-primary-alt)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 90%;
    margin: 0 auto var(--size-600) auto;
    font-size: var(--size-major);
    font-family: var(--heading-font);
    font-weight: 900;
  }

  @supports (background-image: url(foo.jpg), url(bar.jpg)) {
    .title {
      background-image: linear-gradient(
          var(--color-primary-alt),
          var(--color-primary-alt)
        ),
        linear-gradient(var(--color-primary), var(--color-primary)),
        linear-gradient(var(--color-secondary), var(--color-secondary)),
        linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
      background-size: 1.5ch 0.3em, 3ch 0.3em, min(5ch, 75%) 0.3em, 100% 0.3em;
    }
  }

  header {
    justify-content: center;
    align-items: center;
    padding: var(--size-500) var(--size-400);
    overflow: visible;
    background: var(--block-background, --color-light);
    border-bottom: 2px solid;
  }

  .subtag {
    font-size: var(--size-600);
  }
</style>
