<script>
  export let pageTitle;
  export let pageDescription =
    "Fortnightly insights into the ways website performance and optimisation can help your customers, your business, and the planet. Subscribe today, and start optimising.";

  import { baseURL } from "../../utils/baseURL";
  const siteName = "Optimised";
  import { stores } from "@sapper/app";
  const { page } = stores();
  export let pageCanonical;
  export let issueNo;

  const thumbnailData = {
    title: pageTitle,
    issue: issueNo,
  };
  const thumbnailQuery = new URLSearchParams(
    Object.fromEntries(
      Object.entries(thumbnailData).filter(([key, val]) => val !== undefined)
    )
  ).toString();

  const ogImage = `${baseURL}/.netlify/functions/ogimage?${thumbnailQuery}`;
</script>

<svelte:head>
  <title>{pageTitle ? `${siteName} - ${pageTitle}` : "Optimised"}</title>
  <meta name="description" content={pageDescription} />

  {#if pageCanonical}
    <link rel="canonical" href={pageCanonical} />
  {:else}
    <link rel="canonical" href="{baseURL}{$page.path}" />
  {/if}

  <meta property="og:url" content="{baseURL}{$page.path}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content="" />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:site_name" content="Optimised" />
  <meta property="og:locale" content="en_GB" />
  <meta property="article:author" content="Fershad Irani" />

  <!-- <meta name="twitter:card" content="summary" /> -->
  <meta name="twitter:creator" content="@fershad" />
  <meta name="twitter:url" content="{baseURL}{$page.path}" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:image:alt" content="" />

  <meta name="twitter:dnt" content="on" />
  <meta
    name="pinterest"
    content="nopin"
    description="Sorry, you can't save from my website!"
  />
</svelte:head>
