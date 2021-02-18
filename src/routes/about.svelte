<script>
  import Fathom from "../components/Fathom.svelte";
  import "highlight.js/styles/solarized-dark.css";
  import { onMount } from "svelte";

  onMount(async () => {
    const wcb = document.querySelector("#wcb-wrapper");
    const removeChilds = (parent) => {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      }
    };
    removeChilds(wcb);
  });

  import Metadata from "../components/Metadata.svelte";

  export let pageTitle = "About";
  export let pageDescription =
    "More about Optimised, the fortnightly newsletter about how website performance and optimisation can help your customers, your business, and the planet.";
</script>

<Metadata {pageTitle} {pageDescription} />

<svelte:head>
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
</svelte:head>

<section class="flow">
  <h1 class="heading">About Optimised</h1>
  <p>
    Optimised is a fortnightly email full of tips, insights, and articles into
    the ways website performance and optimisation can help your customers, your
    business, and the planet.
  </p>

  <p>
    Optimised isn't just a newsletter. It's a chance for us to start a
    conversation about website performance.
  </p>

  <p>
    You're welcome to email me any questions you might have about website
    optimisation or performance. I'd love to be able to help you out, and if
    it's worth it we can also share the question with the community.
  </p>
</section>

<section class="flow">
  <h2 class="heading">Who's behind Optimised?</h2>
  <p>
    Optimised is written by me, <a href="//fershad.com">Fershad Irani</a>. I'm a
    web performance and sustainability consultant based in Taipei, Taiwan.
  </p>

  <p>
    I work to make online experiences work better for businesses, their
    customers, and the planet. My work includes updating existing sites to meet
    Core Web Vitals, implementing optimisations to deliver better user
    experience, and build new sites that are fast, lightweight and accessible.
  </p>
  <p>
    At the heart of everything I do is a commitment to sustainable design and
    development principles. I'm constantly conscious of finding ways to make
    sites as efficient as possible, reducing their carbon footprint and
    environmental impact in the process. Even when financial or technical
    limitations may be present.
  </p>
  <h3>Hire me</h3>
  <p>
    I'm currently available for hire on a contract basis. If you need help
    optimising your website, or want to learn more about how you can reduce its
    carbon footprint, then you can find more information about the services I
    offer over <a href="//fershad.com/services/">on my website</a>.
  </p>
</section>

<section class="flow">
  <h2 class="heading">Support this newsletter</h2>
  <p>There are a couple of ways you can support this newsletter.</p>
  <ul>
    <li>Subscribe using the form at the bottom of this page.</li>
    <li>
      Support me with a small financial contribution on <a
        href="https://ko-fi.com/fershad">Ko-fi</a
      >.
    </li>
  </ul>
</section>

<style>
  ul {
    padding-left: var(--size-300);
    margin: var(--size-300) var(--size-700) var(--size-500);
  }

  ul > li {
    margin-bottom: var(--size-300);
  }
</style>
