---
issue: 8
title: Optimising embedded content
description: This week we'll look at a few ways you can optimise pages on your websites that have Twitter/YouTube content embedded within.
date: 2021-01-22 15:30
excerpt: Embedding content from Twitter or YouTube is pretty commonplace these days. However, the code these services provide isn't always the most optimised. This week we'll look at a few ways you can optimise pages on your websites that have Twitter/YouTube content embedded within.
externalCanonical: https://www.fershad.com/blog/posts/optimising-embedded-content
---
Hello again. It's been another eventful couple of weeks since the last email. Personally, I've been working on a side project that's aiming to track clean energy generation in Taiwan. It's been interesting looking into the different energy tech that's around. I've also been spending time looking at various ways to reduce the carbon footprint of the website.

A website's carbon footprint isn't something people think about, but it goes hand in hand with performance. An optimised website is, more often than not, one that's also less energy-intensive. I could talk all day about this, and there'll be at least one issue of this newsletter touching on the topic. If you'd like to know more about the relationship between websites and carbon emissions just reach out to me. Now, onto this week's topic.

# Optimising embedded content

This week I want to cover a few ways you can optimise pages that have Twitter/YouTube content embeds. The idea for this newsletter stems from a tweet by Matt Hobbs in which he points out just how much bloat an embedded tweet can add to a webpage.

> LCP: 600ms slower
> 2.7MB more JS!
> 25 more requests
> LH score dropped 50%
> *Matt Hobbs, Twitter ([Link](https://twitter.com/TheRealNooshu/status/1350578919389470721))*

Embedding content hosted on a third-party is a great way to keep visitors engaged, without them having to leave the site. However, as with most third-party resources we load, there are costs both in terms of extra network requests, file size, as well as performance penalties.

We're going to look at a few different methods you can apply to Twitter & YouTube embeds. These can help significantly reduce page size and remove/reduce JavaScript that the user has to download and execute, while still delivering content to the user and keeping them on your site.

## Twitter

### Drop the script tag

If you want to keep things very simple, just remove the `<script>` tag that's tacked onto the end of the standard Twitter embed script. It looks like this `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>` and you'll find it at the very end of the code Twitter generates for you when you want to embed a tweet.

```html
<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">Bernie...go home already <a href="https://t.co/Ok1WpgjgJS">pic.twitter.com/Ok1WpgjgJS</a></p>&mdash; The Daily Show (@TheDailyShow) <a href="https://twitter.com/TheDailyShow/status/1352074243911999489?ref_src=twsrc%5Etfw">January 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

```html
<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">Bernie...go home already <a href="https://t.co/Ok1WpgjgJS">pic.twitter.com/Ok1WpgjgJS</a></p>&mdash; The Daily Show (@TheDailyShow) <a href="https://twitter.com/TheDailyShow/status/1352074243911999489?ref_src=twsrc%5Etfw">January 21, 2021</a></blockquote>
```

The scripts above are with & without the `<script>` tag respectively. I ran a quick test on my local machine & found that comparing the two code snippets above, the one without the `<script>` tag came in a whopping 2.8MB smaller.

It's worth noting that this method isn't great for tweets with images (the image won't display). I'd very, very strongly recommend using it for tweets that are pure text though.

### Replace with an image

Say you do want to embed a tweet that contains an image. In this case, you can use a screenshot of the tweet in place of the code above. You can use a service like [Tweet Cyborg](https://tweetcyborg.com/) or a Chrome extension to do the work for you.

With the initial screenshot in hand, I'd recommend running it through image compression and creating WebP and/or AVIF versions of it as well. That way you can be sure you're serving the lightest possible file to users.

As a final step, when publishing the image on your site be sure to add ALT text to the image element to describe it's content for people using screen readers. It's a nice touch to also link to the tweet as well.

## YouTube

### Lazy-load the iframe

We've seen that it's possible to lazy-load images, but did you know that the same `loading=lazy` attribute can also be added to `<iframe>` tags?

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/YM3KszYmn58" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

```html
<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/YM3KszYmn58" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

I [wrote about this approach](https://www.fershad.com/blog/posts/lazy-loading-embedded-iframes/) in October last year if you want to get some more details. It's best suited for when you're embedding a YouTube video further down the page - saving about 1.8MB on the initial page load.

### Use an image placeholder

This [sick little trick](https://css-tricks.com/lazy-load-embedded-youtube-videos/) comes courtesy of Arthur Corenzan. It works by replacing the regular (bulky) YouTube embed code with a placeholder image. The YouTube video content only gets loaded if the user clicks on the play button that's programmagically (yep, that's a thing) place on the placeholder. The code looks like this:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/YM3KszYmn58"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/YM3KszYmn58?autoplay=1><img src=https://img.youtube.com/vi/YM3KszYmn58/hqdefault.jpg alt='Improving The Page Loading Experience To Reduce Layout Shift by Jen Simmons'><span>▶</span></a>"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="Improving The Page Loading Experience To Reduce Layout Shift by Jen Simmons"
></iframe>
```

Using this trick I was able to get the YouTube embed size down to 18kB on initial page load. Adding `loading=lazy` onto this iframe would bring that initial hit down to 0kB if the asset was further down the page.

Be sure to replace the the YouTube video code in the code above - it appears in 3 places. You should also replace the title & alt fields with relevant text.

## Resources

- **[Matt Hobb's Tweet](https://twitter.com/TheRealNooshu/status/1350578919389470721)**  - The tweet that inspired this issue.
- **[Tweet Cyborg](https://tweetcyborg.com/)** - Automatically generate screenshots of any public tweet.
- **[Lazy-loading embedded iframes](https://www.fershad.com/blog/posts/lazy-loading-embedded-iframes/)** - A short post looking at native browser lazy-loading of iframes, and the benefits it can deliver.
- **[Lazy load embedded YouTube videos](https://css-tricks.com/lazy-load-embedded-youtube-videos/)** - Arthur Corenzan's technique for creating lightweight YouTube embeds using placeholder images.

## Articles

**[Going Serverless With Cloudflare Workers](https://www.smashingmagazine.com/2019/04/cloudflare-workers-serverless/)**

I've been learning a heap about Cloudflare Workers recently as part of a small side project I'm building. They're extremely powerful things which allow you to execute code on edge nodes (servers located very close to a user), and even allow you to intercept page requests and apply transformations on the fly. Definitely something I'll be tapping into more this year.

---

The next issue of Optimised will be in your inbox on February (ALREADY!?) 5th. In the meantime, I'd really appreciate it if you could share this email with a friend. As always if you've got any feedback or specific topics you want to be covered then just reply to this email.

Keep safe, stay well.

Fershad.