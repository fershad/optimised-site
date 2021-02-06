---
issue: 2
title: Third-party resources - A cautionary tale
description: Optimised is a fortnightly newsletter all about web performance. In this issue we'll be looking at third-party resources.
date: 2020-10-30 15:30
excerpt: In this issue of Optimised we'll be looking at third-party resources. These are assets (scripts, fonts, ad services etc.) that many websites use, but which are hosted/served from another domain (most often outside the website owner's sphere of control).
tags: ['third-party']
---
# **Third-party resources - A cautionary tale**

In this issue of Optimised we'll be looking at third-party resources. These are assets (scripts, fonts, ad services etc.) that many websites use, but which are hosted/served from another domain (most often outside the website owner's sphere of control).

Ironically, for a newsletter focused on performance and speed, I find myself writing this issue from a rural part of southern Taiwan. I'm here to slow down a little, take stock of things, and just reset. With everything 2020 has thrown our way, having the chance to take a break like this is appreciated more than ever! I hope you've also had a chance to look after your physical and mental wellbeing through this rough as heck year.

***

## What are third-party resources

Nearly every site on the internet loads at least one third-party asset. The 2019 Web Almanac identified that [93% of sites include at least one third-party resource](https://almanac.httparchive.org/en/2019/third-parties#data). These third-party assets do everything from serving fonts and JavaScript libraries, to featuring ads, gathering analytics, and even delivering content to users.

Third-party assets allow developers to quickly pull in the latest versions of common web resources (like jQuery). This frees them from the hassle of having to keep libraries updated and lets them get on with other parts of site building. For a long time they were also viewed as delivering performance boosts to websites due to caching of assets from third-party hosts (this is no longer the case as Chrome joins Safari in using HTTP cache keys to [prevent user tracking](https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/)).

Outside the dev space, third-party resources allow marketing, sales, and customer service teams within businesses to leverage the company website to gather information about current and potential customers. From adding tracking or analytics, to running A/B tests, to providing integrated real-time chat services, *if* used right they can really help organisations get more out of their websites.

For all their convenience, though, using third-party assets on a site comes served with a side of privacy risks, security concerns and, you guess it, performance costs. In recent years you can add GDPR, PERC and CCPA compliance concerns on top of these.

## **Third-party resources and performance**

When you pull in a third-party resource to use on your site, you're surrendering some degree of the control you have over your site's performance. If the provider hosting the third-party assets you're requesting is experiencing a slow-down or, even worse, an outage then your site suffers. Harry Roberts [illustrates this as clearly as possible](https://youtu.be/bmIUYBNKja4?t=675) in his performance.now() 2018 talk.

Okay, so a full outage on the third-party provider's end is something that's totally out of your control. But what are some other performance concerns that third-party assets pose, and what can you do to mitigate them? Andy Davies has [an in-depth, technical, post](https://andydavies.me/blog/2020/10/02/reducing-the-site-speed-impact-of-third-party-tags/) on some methods you can use - I'll help you get a few easy wins here.

### **Kick-off the connection early**

Requesting a third-party asset first requires the browser to make a connection to the external domain *before* it can start downloading the asset. You can kick-off this connection early by using `rel="preconnect"` link tags early on in your document. Use these sparingly though since they do consume bandwidth. An example for Google Fonts would look like:

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
```

### **Use minified assets**

If you're using JavaScript or CSS files from third-parties make sure that you're being served with minified versions. These are often orders of magnitude smaller in size than unminified assets, meaning they're quicker to download.

In a recent project I completed we saved 1.3 seconds of blocked page load time by switching an unminified tracking script to a minified version. We later got rid that script entirely because it wasn't being used. Which brings me to ...

### **Audit the resources you're using regularly**

Quite often third-party scripts are added to pages to serve some short-term purpose and then just left there. Scheduling a bi-annual audit of your site's assets can help you keep on top of 'zombie' resources that might be impacting your site's performance but serving no real business purpose.

## **What about those security and privacy risks?**

If I asked you what third-party scripts were being loaded on your website you might be able to tell me those which you added yourself. But sometimes these scripts can come with their own suite of piggybacking third-party trackers, cookies, and scripts which you probably aren't even aware of! I strongly urge you to have a read of *[The High Privacy Cost of a "Free" Website](https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites)* article from The Markup. It's a horrifying read if you're someone who gives even the smallest damn about the security & privacy of yourself and your website's users.

Besides piggybacking scripts, there's also a risk that the third-party code you load to your site could be malicious. Take the [2018 breach of the British Airways](https://www.riskiq.com/blog/labs/magecart-british-airways-breach/) payment system as an example. A small, malicious addition to a third-party code base was made resulting in potentially 380,000 people having personal and payment information captured.

### **Privacy Focused Analytics**

Google Analytics gives a wealth of data to website operators (most of which I'm sure isn't even glanced at!). However, it also gives Google a wealth of valuable data to add to individual advertising profiles through their DoubleClick advertising arm.

So, if all you need website analytics for is tracking page views, and basic events, then maybe you should consider switching to a privacy focused analytics platform that doesn't profile users or use cookies. **Fathom Analytics** is one such company with a privacy-first analytics service. Alternately you can use a tool like **Umami** to self-host your analytics. Both of these approaches are also GDPR compliant - so that's also one less 'cookie notice' to load on your site.

I've linked to both in the Resources part of this email if you're interested in checking them out.

## **Host assets on your domain when possible**

Hosting scripts, fonts, stylesheets etc. locally is the best way to avoid the performance, security, and privacy issues covered above. Hosting on your own domain removes the network connection required to access external resources, ensures caching for repeat visitors, and gives you certainty in the code your site is loading. Of course, this isn't always possible like in the case of some analytics and advertising scripts, but in general it's a better approach.

## **Resources**

- [2019 Web Almanac | Third Parties](https://almanac.httparchive.org/en/2019/third-parties#data) - A data-driven annual look at the state of the web.
- [Say goodbye to resource-caching across sites and domains](https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/) - Stefan Judis explains how changes recently Google Chrome (v86) spells the end of third-party resource sharing across the web.
- [It's my (third) party, and I'll cry if I want to.](https://www.youtube.com/watch?v=bmIUYBNKja4) - Harry Roberts 2018 performance.now() conference talk on third-party resources and their impacts on website performance. Example of third-party outage from [11:15 - 13:34](https://youtu.be/bmIUYBNKja4?t=675).
- [Reducing the Site-Speed Impact of Third-Party Tags](https://andydavies.me/blog/2020/10/02/reducing-the-site-speed-impact-of-third-party-tags/) - Andy Davies' incredibly detailed look at what steps developers can take to reduce the impact of third-party tags on page load (in particular first paint, and largest paint metrics).
- [The High Privacy Cost of a “Free” Website](https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites) - An article from The Markup which exposes the hidden privacy costs that come with using free third-party scripts.
- [The British Airways Breach](https://www.riskiq.com/blog/labs/magecart-british-airways-breach/) - An analysis of how 22 lines of code claimed up to 380,000 victims.
- [Fathom Analytics (affiliate link)](https://usefathom.com/ref/CEHKLY) - Fathom is a simple, light-weight, privacy-first alternative to Google Analytics that doesn't profile your website visitors.
- [Umami analytics](https://umami.is/) - A self-hosted analytics option that, like Fathom, doesn't capture the personal information of users that visit your website.

This email's already long enough so I've not included any extra articles this week. If you only read one resource I've linked to then I'd strongly urge you to make that The Markup article on the privacy cost of "free" websites.

---

As always if you've got any feedback or specific topics you want covered then just reply to this email. If you know anyone who'd benefit from this email, go ahead and share it with them!

Keep safe, stay well.
Fershad.