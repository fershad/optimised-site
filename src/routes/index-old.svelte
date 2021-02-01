<script>
  import successkid from "images/successkid.jpg";
  import { goto } from "@sapper/app";
  import { fadeIn, fadeOut } from "../animate";

  function doThing() {
    console.log("doing something");
    goto("blog");
  }
</script>

<svelte:head>
  <title>Optimised</title>
</svelte:head>

<div in:fadeIn out:fadeOut>
  <h1>Great success!</h1>

  <figure>
    <img alt="Success Kid" src={successkid} />
    <figcaption>Have fun with Sapper!</figcaption>
  </figure>

  <button on:click={doThing}>Take me places</button>

  <p>
    <strong
      >Try editing this file (src/routes/index.svelte) to test live reloading.</strong
    >
  </p>
</div>

<style>
</style>
