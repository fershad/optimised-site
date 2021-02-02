<section id="subscribe">
  <h2>Subscribe</h2>
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/fershad"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/fershad', 'popupwindow')"
    class="embeddable-buttondown-form"
  >
    <label for="bd-email">Enter your email</label>
    <input
      type="email"
      name="email"
      id="bd-email"
      placeholder="you@email.com"
    />
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Subscribe" />
    <p>
      <a href="https://buttondown.email" target="_blank"
        >Powered by Buttondown.</a
      >
    </p>
  </form>
</section>

<style>
  #subscribe {
    margin-top: calc(2em + var(--size-500));
  }

  input[type="email"] {
    border: 2px dashed var(--text-color);
    /* background: var(--color-secondary-alt); */
  }

  input:focus-within[type="email"] {
    border: 2px solid var(--color-primary);
    /* background: var(--color-primary-alt); */
  }
</style>
