<script>
  import Fathom from "../components/Fathom.svelte";
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
</script>

<svelte:head>
  <title>You've unsubscribed from Optimised</title>
  <meta
    name="description"
    content="Fortnightly insights into the ways website performance and optimisation can help your customers, your business, and the planet. Subscribe today, and start optimising."
  />
  <Fathom siteCode="GYXRKGAO" />
  <script type="module" src="/carbon-badge.mjs" async></script>
  <script nomodule="" src="/carbon-badge.js" async></script>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section>
  <h1 class="heading">You've unsubscribed</h1>
  <p>
    Thanks for letting me into your inbox with this newsletter. I hope that you
    picked up some valuable insights and information during your subscription.
  </p>

  <p>
    If you have any feedback, or want to reach out to me, you can reach me at
    <a href="mailto:optimised@fershad.com">optimised@fershad.com</a>.
  </p>

  <p>
    All the best,<br />
    Fershad.
  </p>
</section>
