<section id="subscribe">
  <p class="heading">Subscribe</p>
  <p>
    Receive fortnightly website optimisation tips, insights, and articles
    directly to your inbox. <br />Alternately, you can receive updates using
    <a href="/feed/rss.xml" onclick="window.fathom.trackGoal('SZV8WIPB', 0);"
      >RSS</a
    >.
  </p>
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/fershad"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/fershad', 'popupwindow')"
    class="embeddable-buttondown-form"
  >
    <label for="bd-email">Your email</label>
    <div class="input-wrapper">
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="you@email.com"
      />
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Subscribe" />
    </div>
    <p>
      This newsletter is powered by <a
        href="https://buttondown.email"
        target="_blank" rel="noopener">Buttondown.</a
      >
    </p>
  </form>
</section>

<style>
  input[type="email"] {
    border: 2px dashed var(--text-color);
    padding-left: var(--size-300);
    width: 100%;
    max-width: 30rem;
    display: inline-block;
    flex: 1 1 auto;
    /* background: var(--color-secondary-alt); */
  }

  input:focus-within[type="email"] {
    border: 2px solid var(--color-primary);
    /* background: var(--color-primary-alt); */
  }

  p:first-of-type {
    margin-top: var(--size-400);
  }

  label {
    display: block;
    font-size: var(--size-400);
    font-weight: 700;
    font-family: var(--heading-font);
  }

  input[type="submit"] {
    padding-bottom: 2px;
    max-width: 30rem;
    display: inline-block;
    position: relative;
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
    flex: 1 0 auto;
  }

  input[type="submit"]:hover,
  input[type="submit"]:focus {
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

  /* input[type="submit"]:focus {
    background-size: 100% 4px;
    background-position: 50% 100%, 50% 0%;
    box-shadow: 0px 0px 0px 4px var(--color-primary-alt);
  } */

  .input-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: calc((var(--size-300) * -1) * 0.5);
  }

  .input-wrapper > * {
    margin: calc(var(--size-300) * 0.5);
  }

  .input-wrapper > input[type="submit"]:focus {
    outline: var(--color-secondary) dotted calc(var(--size-300) * 0.2);
    outline-offset: calc(var(--size-300) * 0.5);
  }
</style>
