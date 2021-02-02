---
issue: 6
title: Optimising images - Serving images
description: A guide to some techniques that can help with optimising, compressing & serving images.
date: 2020-12-25 15:30
excerpt: In this issue, we'll continue our look at serving optimised images on the web. This week we'll be looking at some of the techniques you can use in your code, or plugins that you can use for WordPress.
tags: ['images', 'tooling']
---
This will be the last newsletter of 2020. I hope that during this holiday period you've been able to stay connected with those dearest to you.

In this issue, we'll continue our look at serving optimised images on the web. This week we'll be looking at some of the techniques you can use in your code, or plugins that you can use for WordPress. If you need a recap on the last email you can [find it here](https://www.fershad.com/optimised/issue/5/optimising-images-reducing-image-size/).

# **Optimising images - Serving images**

Okay, so you've gone ahead and optimised your images. You've taken entire megabytes off them by compressing them, and you've even made a WebP version. We could stop here, but we're not going to.

Serving the right images to your users, at the right time, is another small step you can take towards reducing the size of your page. The techniques we'll go through here focus on loading only the images your users are likely to see (lazy-loading) and serving images at the right size for the space they will occupy (responsive-loading).

## **Lazy-loading**

Lazy-loading is an image loading technique that focuses on downloading only the images that are currently, or will soon be, displayed in the browser window as a user scrolls a page. It's been around for a long time in web development, but one that only recently gained widespread native browser support. The main benefit lazy-loading delivers is faster initial page load, since the browser won't be tied up downloading images that are outside the viewport.

Prior to this year, developers would likely reach for a JavaScript library to add this functionality to their websites. However, as of today [Chrome, Edge & Firefox all support native lazy-loading](https://caniuse.com/loading-lazy-attr) for images - that's about 70% over the browser market. In Safari it can be turned on via the settings.

The great thing about using a browser's native lazy-loading capabilities is that you're delivering a progressively enhanced web experience to your users. That means if a user's browser doesn't support it then the image will just be downloaded as per normal without breaking any other functionality of the page.

To add lazy-loading to images within your code all you need to do is put the `loading=lazy` attribute inside your image tag.

```html
<img src="/your-cool-image.jpg" loading="lazy" alt="Make your images accessibly, fam" height="100" width="100">
```

Copy

If you're running a WordPress site then [Kinsta have a solid post](https://kinsta.com/blog/wordpress-lazy-load/) that goes through a few plugins you can look to add to your site.

### **Tips & Gotchas**

- To prevent layout shift as lazy-loaded images are rendered be sure to add the height and width attributes to the image. This helps the browser understand the aspect-ratio of the image, and how much space to set aside for it. Jen Simmons has a [great video explaining this](https://www.youtube.com/watch?v=4-d_SoCHeWE&feature=youtu.be).
- You can also use lazy-loading techniques for iframes (think YouTube embeds). I've written about that in [a blog post](https://www.fershad.com/blog/posts/lazy-loading-embedded-iframes/).

## **Responsive-loading**

I alluded to responsive-loading in the last email. There are a couple of use cases in this section:

1. Serving modern images formats to browsers that support them
2. Serving smaller sized images for smaller screens

### **Serving modern image formats with fallbacks**

If you're hosting images yourself (i.e. alongside your web page files) then you can use the `picture` tag to serve super-light WebP or AVIF images to users, while keeping your optimised JPEG image for users on older browsers.

The code in your HTML would look something like the below.

```html
<picture> <source srcset="img/example.avif" type="image/avif"> <source srcset="img/example.webp" type="image/webp"> <img src="img/example.jpg" alt="This will be the fallback image"> </picture>
```

**Serving smaller sized images for smaller screens**

Sometimes we'll have images that display at different sizes depending on the size of the user's window. You might have a product image that is 640px wide on desktop, but on mobile takes the up the full width of the screen (~320px). Rather than forcing mobile users to download the full 640px image, we can prepare images of different sizes and hint to the browser which one it should use. Here's an example:

- Create the variants of the image:
    - 1280px wide for retina desktop displays
    - 640px wide for regular display desktop monitors & retina mobile displays
    - 320px wide for regular mobile displays
- Add the `srcset` attribute to our image tag which tells the browser the sizes of each image:

```html
<img srcset="
  img/example-large.jpg 1280w,
  img/example-regular.jpg 640w,
  img/example-small.jpg 320w"/>
```

Add the `sizes` attribute to the image tag, with a tiny bit of CSS:

```html
<img srcset="
  img/example-large.jpg 1280w,
  img/example-regular.jpg 640w,
  img/example-small.jpg 320w"/>
```

What this says to the browser is - when the viewport width is > 600px use the 640px wide image, otherwise use the 320px version. The browser is smart enough to work out if it should use the retina variant.

The thought of coding all this is nauseating, but thankfully there's a [tool from Cloudinary](https://www.responsivebreakpoints.com/) that can do all the hard work for you (including resizing the images!).

### **For the WordPress crowd**

There's a WordPress plugin for almost everything you'd want to do, and image optimisation is no different. Here's a few popular image optimisation plugins I've seen recommended around the web:

- [Imagify](https://wordpress.org/plugins/imagify/)
- [WP Smush](https://wordpress.org/plugins/wp-smushit/)
- [Optimole](https://wordpress.org/plugins/optimole-wp/)
- [EWWW Cloud](https://wordpress.org/plugins/ewww-image-optimizer-cloud/)
- [ShortPixel](https://wordpress.org/plugins/shortpixel-image-optimiser/)

## **Resources**

1. **[Optimised #5 - Reducing image size](https://www.fershad.com/optimised/issue/5/optimising-images-reducing-image-size/)** - The previous edition of this newsletter if you need a refresher on file optimisation.
2. **[Image lazy-loading on WordPress](https://kinsta.com/blog/wordpress-lazy-load/)** - Kinsta's blog post featuring recommended plugins and practices for image lazy-loading on WordPress.
3. **[Jen Simmon's guide to image lazy-loading](https://www.youtube.com/watch?v=4-d_SoCHeWE&feature=youtu.be)** - An interesting video looking at how browsers lazy-load images, and how to avoid layout shifts.
4. **[Lazy-loading iframes](https://www.fershad.com/blog/posts/lazy-loading-embedded-iframes/) -** A brief blog post by yours truly that looks at how YouTube embeds can be lazy-loaded to save data on initial page load.
5. **[Responsive Breakpoint Generator](https://www.responsivebreakpoints.com/) -** A tool by Cloudinary that does all the hard work of image resizing and code generation for you.

## **Articles**

**[The Import on Interaction Pattern](https://addyosmani.com/blog/import-on-interaction/)**

Addy Osmani looks at techniques that developers can implement to delay the loading of non-critical resources until the time when a user needs to interact with them. This is can be a great performance win if you're relying on third-party resources like chat widgets, sharing modals and the like.

**[Conditional JavaScript](https://umaar.com/dev-tips/242-considerate-javascript/)**

While Addy's article above talks about delaying resource load until it's required, Umar Hansa takes a different look at things. In his dev tips post he goes into methods developers can implement to selectively load resources on a user's device based on certain conditions - like connection speed or battery level.

---

The next issue of Optimised will be in your inbox on January 8th, 2021. Yes, 2021. In the meantime, I'd really appreciate it if you could share this email with a friend. As always if you've got any feedback or specific topics you want to be covered then just reply to this email.

Enjoy your holidays if you have them.

Keep safe, stay well. 
Fershad.