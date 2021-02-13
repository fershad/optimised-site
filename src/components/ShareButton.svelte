<script>
  let display = false;
  import { onMount } from "svelte";

  onMount(async () => {
    if (navigator.share) {
      display = true;
    }
  });

  async function share() {
    const url = window.location.href;
    const title = document.querySelector("title").text;
    const text = document.querySelector('meta[name="description"]')
      ? document.querySelector('meta[name="description"]').text
      : "";
    const shareData = {
      url,
      title,
      text,
    };

    try {
      await navigator.share(shareData);
      console.log("Shared", shareData);
    } catch (err) {
      console.log(err);
    }
  }
</script>

{#if display}
  <button
    on:click={() => {
      share();
    }}>Share this page</button
  >
{/if}

<style>
  button {
    padding-bottom: 2px;
    padding-left: var(--size-400);
    padding-right: var(--size-400);
    display: inline-block;
    /* position: relative; */
    color: var(--color-light);
    cursor: pointer;
    border: none;
    /* border-radius: var(--size-300); */
    /* background: var(--color-light-alt); */
    background-image: linear-gradient(
        var(--color-primary),
        var(--color-primary)
      ),
      linear-gradient(var(--color-primary-alt), var(--color-primary-alt)),
      linear-gradient(var(--color-primary), var(--color-primary)),
      linear-gradient(var(--color-secondary), var(--color-secondary)),
      linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
    background-repeat: no-repeat;
    background-size: 100% calc(100% - 0.3rem), 1.5ch 0.3rem, 3ch 0.3rem,
      min(5ch, 75%) 0.3rem, 100% 0.3rem;
    background-position: 100% 0%, 0% 100%, 0% 100%, 0% 100%, 0% 100%;
    transition: background-image 0.3s ease-in-out,
      background-size 0.4s ease-in-out, color 0.3s ease-out, outline 0.25s;
    font-weight: 700;
    /* margin-block-start: var(--size-400); */
  }

  button:hover,
  button:focus {
    color: var(--color-light);
    background-image: linear-gradient(
        var(--color-primary),
        var(--color-primary)
      ),
      linear-gradient(var(--color-primary-alt), var(--color-primary-alt)),
      linear-gradient(var(--color-primary), var(--color-primary)),
      linear-gradient(var(--color-secondary), var(--color-secondary)),
      linear-gradient(var(--color-secondary-alt), var(--color-secondary-alt));
    background-size: 100% calc(100% - 4px), calc(100% - 5ch) 4px,
      calc(100% - 3ch) 4px, calc(100% - 1.5ch) 4px, 100% 4px;
    background-position: 100% 0%, 0% 100%, 0% 100%, 0% 100%, 0% 100%;
    overflow: visible;
  }

  button:focus {
    outline: var(--color-secondary) dotted calc(var(--size-300) * 0.2);
    outline-offset: calc(var(--size-300) * 0.5);
  }
</style>
