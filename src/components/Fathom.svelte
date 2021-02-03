<script>
  export let siteCode;
</script>

{#if process.env.NODE_ENV === "production"}<script
    src="https://cdn.usefathom.com/script.js"
    data-site={siteCode}
    defer></script>{:else}
  <!-- Fathom trackking script here -->
{/if}
