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
    class="pill"
    data-color="primary-dark"
    on:click={() => {
      share();
    }}
  >Share this page</button>
{/if}

<style>
  .pill {
    padding: var(--size-300) var(--size-500);
    border: 0.5px solid var(--green);
    border-radius: 30px;
  }

  .pill[data-color="light"] {
    background: var(--color-primary-light);
    color: var(--dark-text);
  }

  .pill[data-color="text"] {
    background: var(--text-color);
    color: var(--background-color);
  }

  .pill[data-color="accent-dark"] {
    background: var(--color-accent-dark);
    color: var(--dark-text);
  }

  .pill[data-color="accent-light"] {
    background: var(--color-accent-light);
    color: var(--dark-text);
  }

  .pill[data-color="accent"] {
    background: var(--color-accent);
    color: var(--dark-text);
  }

  .pill[data-color="primary"] {
    background: var(--color-primary);
    color: var(--light-text);
  }

  .pill[data-color="primary-dark"] {
    background: var(--color-primary-dark);
    color: var(--light-text);
  }

  button {
    text-decoration: none;
    /* background: var(--dark-green);
  color: var(--lightest); */
    font-size: var(--size-500);
    margin-top: var(--size-500);
    margin-bottom: var(--size-500);
    display: inline-block;
    position: relative;
  }

  button[data-color="primary-dark"] {
    background-color: var(--color-primary-dark);
    color: var(--color-light);
  }

  button[data-color="accent-dark"] {
    background-color: var(--color-accent-dark);
    color: var(--color-light);
  }

  button[data-color="accent"] {
    background-color: var(--color-accent);
    color: var(--color-dark);
    /* text-shadow: -1px -1px 0 var(--accent-color), 1px -1px 0 var(--accent-color),
    -1px 1px 0 var(--accent-color), 1px 1px 0 var(--accent-color); */
  }

  button[data-color="dark"] {
    background-color: var(--color-charcoal);
    color: var(--light-text);
    /* text-shadow: -1px -1px 0 var(--accent-color), 1px -1px 0 var(--accent-color),
    -1px 1px 0 var(--accent-color), 1px 1px 0 var(--accent-color); */
  }

  button::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: calc(100% + 0.5rem);
    width: calc(100% + 0.5rem);
    z-index: -1;
    transform: translate(-0.25rem, -0.25rem);
    border-radius: 60px;
    transition: all 0.2s ease-out;
  }

  button[data-color="primary-dark"]::before {
    background: var(--color-accent-dark);
  }

  button[data-color="dark"]::before {
    background: var(--color-accent-dark);
  }

  button[data-color="accent-dark"]::before {
    background: var(--color-primary-dark);
  }

  button:hover::before {
    height: 99%;
    width: 99%;
    transform: translate(0.5%, 0.5%);
    z-index: -1;
  }
</style>
