const purgeStyles = require('./src/_11ty/transforms/purge-css')
const devStyles = require('./src/_11ty/transforms/devcss')
const htmlMin = require('./src/_11ty/transforms/html-min')
const postFlow = require('./src/_11ty/transforms/post-flow')
const postTOC = require('./src/_11ty/transforms/post-toc')
// const imgPlaceholder = require('./src/_11ty/transforms/img-placeholder')
const {
  rasterImage,
  svgImage,
  pngImage,
} = require('./src/_11ty/shortcode/image')
const analytics = require('./src/_11ty/shortcode/analytics')
const noindex = require('./src/_11ty/shortcode/noindex')
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const readTimeFilter = require('./src/_11ty/filter/readTimeFilter.js');
const wordCountFilter = require('./src/_11ty/filter/wordCountFilter.js');
const dateFilter = require('./src/_11ty/filter/dateFilter.js');
const w3DateFilter = require('./src/_11ty/filter/w3DateFilter.js');
const encodeURI = require('./src/_11ty/filter/uriEncodeComponent.js');
const xmlFiltersPlugin = require('eleventy-xml-plugin');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fse = require('fs-extra');
require('dotenv').config()


const dev = process.env.NODE_ENV !== 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget(".cache/main.css");
  eleventyConfig.addPassthroughCopy({
    public: './'
  })

  
  eleventyConfig.setBrowserSyncConfig({
    files: ['_dev/**/*'],
    open: false,
  })
  
  eleventyConfig.setLiquidOptions({
    // dynamicPartials: true
  });
  
  eleventyConfig.setDataDeepMerge(true)
  // ! Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  //* Image shortcodes
  eleventyConfig.addShortcode("image", rasterImage);
  eleventyConfig.addShortcode("svgImage", svgImage);
  eleventyConfig.addShortcode("pngImage", pngImage);

  //* Add fathom analytics tracking script in build
  eleventyConfig.addShortcode("analytics", analytics)

  //* Shortcode to put noindex metadata into staging site
  eleventyConfig.addShortcode("noindex", noindex)

  // ! Filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter('readTime', readTimeFilter);
  eleventyConfig.addFilter('wordCount', wordCountFilter);
  eleventyConfig.addFilter('encodeURI', encodeURI);
  eleventyConfig.addPlugin(xmlFiltersPlugin);

  // ! Collections
  

  // ! Transforms
  
  
  if (!dev) {
    eleventyConfig.addTransform("postFlow", postFlow);
    eleventyConfig.addTransform("postTOC", postTOC);
    //* Inline page CSS & purge all unused CSS per page
    eleventyConfig.addTransform('purge-styles', purgeStyles);
    //* Inline critical CSS & purge all unused CSS per page
    // eleventyConfig.addTransform('imgPlaceholder', imgPlaceholder);
    //* Minify the HTML
    eleventyConfig.addTransform("htmlmin", htmlMin);
  }  else {
    eleventyConfig.addTransform('dev-styles', devStyles);
  }

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://optimised.email",
    },
  });

  eleventyConfig.addCollection("issuesDescending", (collection) =>
    collection.getFilteredByGlob("issues/*.md").sort((a, b) => {
      if (a.data.issue > b.data.issue) return -1;
      else if (a.data.issue < b.data.issue) return 1;
      else return 0;
    })
  );

  eleventyConfig.addPlugin(pluginRss);
  
  eleventyConfig.setBrowserSyncConfig({
    files: ['_dev/img/*']
  });

  return {
    dir: {
      input: 'src',
      output: process.env.NODE_ENV !== 'production' ? '_dev' : '_site'
    },
  }
}