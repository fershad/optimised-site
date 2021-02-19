---
issue: 5
title: Optimising images - Reducing image size
description: When it comes to optimising images, the easiest place to start is with the image files themselves. With modern image formats, compression tools, and online services it's easy to shave megabytes off the total size of a web page.
date: 2020-12-11 15:30
excerpt: When it comes to optimising images, the easiest place to start is with the image files themselves. With modern image formats, compression tools, and online services it's easy to shave megabytes off the total size of a web page.
tags: ['images', 'tooling']
---
# **Optimising images - Reducing image size**

The next two issues of this newsletter will be all about images. What a way to end the year!

For most web pages out there images are their heaviest assets, slowing down page loading times & impacting Core Web Vitals like LCP & CLS. This makes them one of the first places you should look at if you're first starting to think about optimising your website. There are a few things you can do to reduce the impact of images on page performance. Today, we'll take a look at optimising image files, and in a couple of weeks we'll shift focus to look at some strategies you can apply in your site's markup.

***

When it comes to optimising images, the easiest place to start is with the image files themselves. With modern image formats, compression tools, and online services it's easy to shave megabytes off the total size of a web page.

## **Use the right format**

To begin with, make sure you're using the right image format for the type of image you're trying to display. As a general rule of thumb:

- Use PNG *only* when your image contains transparency that should be retained.
- Use JPG for everything else. And,
- Don't use GIF. They're bloated, not very accessible, and can instantly undo all the hard optimisation work you've done on a page. Use a video file instead.

## **Image compression tools**

There are a wealth of tools, libraries, and online apps out there that allow you to easily compress images. What we're looking at here is straight image compression, taking a JPEG and returning a smaller JPEG file.

- [Compressor.io](http://compressor.io/) (Online. My recommendation)
- [ImageOptim](https://imageoptim.com/mac) (Best choice if you're on a Mac)
- [Optimizilla](https://imagecompressor.com/) (Online)
- [Imgbot.ai](https://www.imgbot.ai/compress-image) (Online)

It's worth noting that the online tools I've listed here do limit the number of images you can upload at one time.

## **Modern image formats**

I'll start this section with a huge caveat. Browser support for image formats varies, especially when looking at the modern image formats mentioned below. I've put links with each format to the website Can I Use which gives you a visual breakdown of support based on the browser version.

<div class="callout">
<p class="h3 title">Tip</p>
<p>If your site requires support for Internet Explorer users then you can skip over this section as neither format mentioned is supported by IE11.</p>
</div>

### **WebP**

WebP ([Can I Use?](https://caniuse.com/?search=webp)) recently go support in Safari (macOS 11+) which means it's now supported by all the major browser engines 🎉 . WebP has long been promoted by Google as a recommended image format for the web. According to them, it can reduce file size by 19% - 64% over JPG or PNG.

WebP can be used on standard images, as well as images that have transparency. So you can use it on your site to replace all your images if you're feeling up to it. Of course, if you have visitors coming in on older versions of Safari, Chrome or Firefox then you should still keep the JPG/PNG versions to show as a fallback. We'll get more into this next issue, but I've written up [a post about this](https://www.fershad.com/blog/posts/reduce-page-weight-with-picture-tag/) if you just can't wait.

**WebP Conversion Tools**

- [Romeolight](http://romeolight.com/products/webpconv/) (Windows)
- [Optimus](https://github.com/Splode/optimus) (Windows, Mac, Linux)
- [Convertio](https://convertio.co/jpg-webp/) (Online)

### **AVIF (AV1)**

AVIF ([Can I Use?](https://caniuse.com/?search=avif)) is the newest image format on the block, and boy does it shrink images. [Jake Archibald has a terrifically in-depth article](https://jakearchibald.com/2020/avif-has-landed/) about the new format & how it stacks up with other formats across a range of use cases. In the article, he shows that using AVIF a 2.5MB image of an F1 car can be crunched down to a mere 18kb.

Support is currently very limited - Chrome (Desktop), Opera & Firefox (behind flags). That said, if you're keen for some lightweight images then you can start serving AVIF using the fallback method I touched on above.

**AVIF Conversion Tools**

- [Squoosh](https://squoosh.app/) (Online)
- WASM AVIF decoder/encoder ([Code library](https://github.com/saschazar21/webassembly/tree/master/packages/avif))

## **Let an online service take care of things**

If the thought of converting & optimising each image you add to your site turns you off the idea, then rest easy - there are several service providers who can do most of the hard work for you! These are paid services, though some do have free-tiers to begin with.

The major players in this space are [Cloudinary](https://cloudinary.com/), [Imgix](https://www.imgix.com/) & [Fastly](https://www.fastly.com/products/web-and-mobile-performance/image-optimization). Each provides you with "on-the-fly" image optimisation, conversion, and manipulation. It's all done by using a URL they provide to serve your images and passing along a couple of variables. Take a look at the Imgix homepage to see it in action.

I use Cloudinary on a few websites I host. It allows me to easily serve images to visitors in the best format, and at the best quality with just a single line of HTML.

```html
<img src="<https://res.cloudinary.com/[MY_ACCOUNT_NAME]/image/fetch/q_auto,f_auto/https://www.mysite.com/logo.jpg>" alt="Don't forget it, fam">
```

What this will do is send the image from my site to Cloudinary along with information about the user's browser. Cloudinary will then send back the image in the best supported format (i.e. WebP if the visitor's browser supports it, JPG if not), and compress it to the smallest size while retaining visual quality. Cloud computing ... 🤯.

## **Resources**

- [Reduce the Weight of Your Web Pages with the Picture Tag](https://www.fershad.com/blog/posts/reduce-page-weight-with-picture-tag/) - A short run-through of how you can use the latest image formats while still presenting JPG/PNG formats for users that don't have support.
- [AVIF has landed](https://jakearchibald.com/2020/avif-has-landed/) - Jake Archibald's dive into all of the benefits of the AVIF image format. A detailed read, but also full of visual examples that you can quickly skim over.

## **Articles**

**[Beyond fast with new performance features](https://www.youtube.com/watch?v=Z6wjUOSh9Tk)**  
Google's 2020 Chrome Developer's Summit is on this week, so there's a heap of fascinating content coming out of that. In this video, Jake Archibald features some very new features and proposal aimed at improving web performance. The `<portal>` element looks especially cool.

**[Web Almanac 2020 - Performance](https://almanac.httparchive.org/en/2020/performance)**  
The 2020 Web Almanac was published this week. I've linked above to the Performance section which this year is focused on Core Web Vitals. It's worth checking out the other sections too, there are heaps of insights across the board.

---

The next issue of Optimised will be in your inbox on December 25th. In the meantime, I'd really appreciate it if you could share this email with a friend. As always if you've got any feedback or specific topics you want to be covered then just reply to this email.

Keep safe, stay well. <br>
Fershad.