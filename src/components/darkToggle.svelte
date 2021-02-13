<script>
  import { onMount } from "svelte";
  import Moon from "./svgs/Moon.svelte";

  const STORAGE_KEY = "user-color-scheme";
  const COLOR_MODE_KEY = "--color-mode";

  let modeToggleButton;
  let modeToggleText = "light";
  let themeAria = true;
  let modeStatusElement;

  onMount(async () => {
    applySetting();
  });

  const getCSSCustomProp = (propKey) => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(
      propKey
    );

    if (response.length) {
      response = response.replace(/\"/g, "").trim();
    }

    return response;
  };

  const setButtonLabelAndStatus = (currentSetting) => {
    modeToggleText = currentSetting === "dark" ? "light" : "dark";
    currentSetting === "dark" ? (themeAria = false) : (themeAria = true);
  };

  const applySetting = (passedSetting) => {
    let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

    if (currentSetting) {
      document.documentElement.setAttribute(
        "data-user-color-scheme",
        currentSetting
      );
      setButtonLabelAndStatus(currentSetting);
    } else {
      setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
    }
  };

  const toggleSetting = () => {
    let currentSetting = localStorage.getItem(STORAGE_KEY);
    themeAria = !themeAria;

    switch (currentSetting) {
      case null:
        currentSetting =
          getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
        break;
      case "light":
        currentSetting = "dark";
        break;
      case "dark":
        currentSetting = "light";
        break;
    }

    localStorage.setItem(STORAGE_KEY, currentSetting);

    return currentSetting;
  };
</script>

<div class="userToggle">
  <button
    role="switch"
    aria-label="Change site theme."
    on:click={() => {
      applySetting(toggleSetting());
    }}
  >
    <span aria-label="Light theme" aria-checked={themeAria}>Light</span>
    <span aria-label="Dark theme" aria-checked={!themeAria}>Dark</span>
  </button>
</div>

<style>
  button {
    background: var(--toggle-background-color);
    color: var(--text-color);
    border: none;
    border-radius: calc(var(--size-300) / 2);
    font: inherit;
    font-size: inherit;
  }

  button:focus {
    outline: var(--color-secondary) dotted calc(var(--size-300) * 0.2);
    outline-offset: calc(var(--size-300) * 0.25);
  }

  button :global(svg) {
    transform: rotate(30deg) scale(-0.5);
  }

  [role="switch"] [aria-checked="true"] {
    background: var(--color-primary);
    color: var(--color-light);
    cursor: default;
  }

  button span {
    padding: 0.1rem 0.3rem;
    border-radius: calc(var(--size-300) / 2);
    cursor: pointer;
  }

  button span:first-child {
    margin-inline-end: var(--size-300);
  }
</style>
