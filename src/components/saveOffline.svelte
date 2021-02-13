<script>
  let offlineButton;
  let offlineButtonText;

  import { onMount } from "svelte";

  onMount(async () => {
    if ("serviceWorker" in navigator) {
      caches.open("SavedPages").then(function (cache) {
        cache.match(window.location.href).then(function (result) {
          if (result) {
            offlineButtonText = "Page saved for offline! 👍🏻";
            offlineButton.setAttribute("disabled", "disabled");
          } else {
            offlineButtonText = "Save this page to read offline";
          }
        });
      });

      caches.open("cachedPages").then(function (cache) {
        cache.match(window.location.href).then(function (result) {
          if (result) {
            offlineButtonText = "Page saved for offline! 👍🏻";
            offlineButton.setAttribute("disabled", "disabled");
          } else {
            offlineButtonText = "Save this page to read offline";
          }
        });
      });
    }
  });

  const savePage = () => {
    if ("serviceWorker" in navigator) {
      offlineButtonText = "Saving ...";
      caches.open("SavedPages").then(function (cache) {
        cache.add(window.location.href).then(function () {
          const data = {
            title: document.querySelector("title").innerText,
          };

          localStorage.setItem(window.location.href, JSON.stringify(data));

          offlineButtonText = "Page saved for offline! 👍🏻";
          offlineButton.setAttribute("disabled", "disabled");
        });
      });
    }
  };
</script>

<button
  bind:this={offlineButton}
  on:click|preventDefault={() => {
    savePage();
  }}>{offlineButtonText}</button
>
