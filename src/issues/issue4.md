---
issue: 4
title: Core Web Vitals & Google's Search Update
description: What are Core Web Vitals? What might adding them to the signalling mix for search mean for SEO? And, what can you do to check & prepare your site? Read on to find out!
date: 2020-11-27 15:30
excerpt: What are Core Web Vitals? What might adding them to the signalling mix for search mean for SEO? And, what can you do to check & prepare your site?
externalCanonical: https://www.fershad.com/blog/posts/core-web-vitals-google-search/
tags: ['web vitals']
---
# **Core Web Vitals & Google's Performance Update**

As promised last time, this issue of Optimised will focus on Google's recent announcement that, come May 2021, Core Web Vitals will be added to the signal mix for search. What are Core Web Vitals? What might Google's announcement mean for the web? And, what can you do to check & prepare your site? Stick around to find out!

***

A couple of weeks ago Google put out a [short blog post](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) to announce something rather significant. Core Web Vitals metrics will be added to the page experience signals mix as part of the May 2021 search update. That's six months notice for a change that could have SEO ramifications as large as those felt when Google started prioritising sites for mobile-friendliness (another page experience signal) back in 2015.

## **So, what are Core Web Vitals?**

Put simply they're a set of user experience metrics that aim to quantify real-world user experiences across the web. They measure page interactivity, content loading, and content stability during page load. The three metrics that form the Core Web Vitals are:

- **Largest Contentful Paint (LCP)**: A timing of how long it takes for the largest above-the-fold element to be painted on screen. This is usually a hero image/video or large text block.
- **First Input Delay (FID):** Measures the time it takes before the browser can react to a user input (like a click or tap).
- **Cumulative Layout Shift (CLS):** Indicates the movement of visible elements as the user loads and interacts with the page. You know when you start reading an article, then an ad loads above it & all the content get pushed down? CLS measures that.

Together these three metrics give an indication of a page's load time (LCP), responsiveness (FID), and page experience (CLS).

## **How might these impact SEO?**

Well, we'll find out in May 2021, won't we? But hey, let's speculate for a bit.

Google's been paying more attention to page experience for some time now. That was spearheaded by the shift to mobile-first indexing back in 2015. In recent times it's also been playing around with having page experience indicators in the Chrome browser, and they've even indicated plans to start testing similar indicators directly in search results.

> We believe that providing information about the quality of a web page’s experience can be helpful to users in choosing the search result that they want to visit. ... We plan to test this [visual indicators] soon and if the testing is successful, it will launch in May 2021 and we’ll share more details on the progress of this in the coming months.Jeffrey Jose, Google Product Manager on Search

So all signs point to Google doubling-down on page experience for the foreseeable future. The changes in May next year *could* see sites that have neglected site performance and page experience dropping down Google search results. The addition of visual page experience indicators alongside search results could have the same impact, with users able to choose to navigate to better-performing pages.

## **Start preparing now.**

### **Test your site for Core Web Vitals**

Last issue ([read it here](https://www.fershad.com/optimised/issue/3/tools-to-measure-website-performance)) I sent out a list of tools that can be used to check website performance. From that list, I'd recommend using [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to check pages on your site for the Core Web Vitals listed above.

If your site as a whole receives a high number of visitors per month then you can also find real user Core Web Vitals measurements through Google's Search Console dashboard.

### **Plan, prioritize, and fix**

With a baseline in place, it's easier to identify the areas that most urgently require attention. If you are seeing "poor" rankings for any of the Core Web Vitals then definitely look to address them first. It's also a good time to start driving a culture of performance within your web team - from design to content writers, to developers. It'd be a pain to fix existing pages only to find that newer pages being added to the website revert back to old habits.

Simon Hearne has a [very detailed blog post](https://simonhearne.com/2020/core-web-vitals/) that goes through the topics covered in this email. It includes actions you can take to address problems with each of the Core Web Vitals.

## **Resources**

1. **[Timing for bringing page experience to Google Search](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)** - Google's blog post announcing the upcoming addition of Core Web Vitals to the UX signals mix.
2. **[Issue 3: Tools to measure site performance](https://www.fershad.com/optimised/issue/3/tools-to-measure-website-performance)** - Issue 3 of this newsletter which lists several tools you can use to check the performance of your site.
3. **[How to Improve Core Web Vitals](https://simonhearne.com/2020/core-web-vitals/) -** Simon Hearne goes into great detail about Core Web Vitals and ways you can address some common issues that might be impacting these metrics.

## **Article**

**[BBC World Service & Web Performance](https://medium.com/@chris-hinds/bbc-world-service-web-performance-26b08f7abfcc)**  
How the BBC World Service migrated 31 million weekly readers to an isomorphic react app and improved page performance by up to 83%.

---

The next issue of Optimised will be in your inbox on December 11th. In the meantime, I'd really appreciate it if you could share this email with a friend.

As always if you've got any feedback or specific topics you want to be covered then just reply to this email.

Keep safe, stay well. <br>
Fershad.