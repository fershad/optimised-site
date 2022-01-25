<script>
  let progress;

  const readingProgress = (contentArea, progressBar) => {
    const content = document.getElementById(contentArea);

    const frameListening = () => {
      const contentBox = content.getBoundingClientRect();
      const midPoint = window.innerHeight / 2;
      const minsRemaining = Math.round(progress.max - progress.value);

      if (contentBox.top > midPoint) {
        progress.value = 0;
      }

      if (contentBox.top < midPoint) {
        progress.value = progress.max;
      }

      if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
        progress.value =
          (progress.max * Math.abs(contentBox.top - midPoint)) /
          contentBox.height;
      }

      window.requestAnimationFrame(frameListening);
    };

    window.requestAnimationFrame(frameListening);
  };

  readingProgress("post-content");
</script>

<progress class="reading-progress-bar" bind:this={progress} />

<style>
  progress.reading-progress-bar {
    -webkit-appearance: none;
    appearance: none;
    position: fixed;
    width: 100%;
    height: calc(var(--size-300) * 0.75);
    z-index: 99;
    background: transparent;
  }

  :global(progress.reading-progress-bar[value]::-webkit-progress-bar) {
    background-color: rgba(0, 0, 0, 0);
  }

  :global(progress.reading-progress-bar[value]::-webkit-progress-value) {
    background-color: var(--color-primary);
  }
</style>
