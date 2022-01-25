<script>
  let display = false;
  import { onMount } from "svelte";
  import { share } from "../helpers/share";

  onMount(async () => {
    if (navigator.share) {
      display = true;
    }
  });
</script>

{#if display}
  <button
    on:click|preventDefault={() => {
      share();
    }}
  >Share this page</button>
{/if}

<style>
  button {
    text-shadow: -1px -1px 0 var(--background-color),
      1px -1px 0 var(--background-color), -1px 1px 0 var(--background-color),
      1px 1px 0 var(--background-color);
    color: currentColor;
    background: none;
    border: none;
    background-image: linear-gradient(
        90deg,
        var(--background-color),
        var(--background-color)
      ),
      linear-gradient(90deg, var(--color-accent-dark), var(--color-accent-dark));
    background-repeat: no-repeat;
    background-position: -100% 95%, 0% 95%;
    background-size: 0px 0.35ex, 100% 0.35ex;
    text-decoration: none;
    transition: background-size 0.4s ease-in;
    font-weight: bold;
    cursor: pointer;
    font-size: clamp(var(--size-400), var(--size-450), var(--size-500));
    font-family: var(--base-font);
    padding: 0;
  }

  button:hover,
  button:focus {
    /* color: var(--green); */
    background-repeat: no-repeat;
    background-position: 0% 95%, 0% 95%;
    background-size: 100% 0.35ex, 100% 0.35ex;
    text-decoration: none;
  }
</style>
