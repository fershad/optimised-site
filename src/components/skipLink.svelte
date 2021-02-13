<script>
  function scrollTo({ target }) {
    document.querySelector(target.getAttribute("href")).scrollIntoView({
      behavior: "auto",
    });
  }
</script>

<a
  class="skip-link button"
  href="#main-content"
  on:click|preventDefault={scrollTo}>Skip to content</a
>

<style>
  .skip-link {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    z-index: 99;
  }

  .skip-link:not(:focus) {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  .button {
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

  .button:hover {
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
</style>
