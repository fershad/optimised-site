<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";

  const STORAGE_KEY = "user-color-scheme";
  const COLOR_MODE_KEY = "--color-mode";

  let modeToggleButton;
  let modeToggleText = "light";
  let modeStatusElement;

  onMount(async () => {
    // modeToggleText = getCSSCustomProp(COLOR_MODE_KEY);
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
    modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
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

<div class="user-toggle">
  <div role="status" class="visually-hidden" bind:this={modeStatusElement} />
  <button
    class="toggle-button"
    on:click={() => {
      applySetting(toggleSetting());
    }}
  >
    <span class="toggle-button__text">{modeToggleText}</span>
    <span class="toggle-button__icon" aria-hidden="true" />
  </button>
</div>

<style>
</style>
