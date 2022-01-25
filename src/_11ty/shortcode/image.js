const Image = require('@11ty/eleventy-img');

const dev = process.env.NODE_ENV !== 'production';
const baseURL = dev ? 'http://localhost:8080' : 'https://fershad.com';

async function rasterImage(src, alt, customWidths, sizes, loading = 'lazy', decoding = true) {
    const defaultWidths = [300, 600, 1200];
    const defaultFormats = ['jpeg'];
    let srcset;

    try {
        srcset = customWidths.split(',').map(x => +x);
    } catch {
        srcset = defaultWidths;
    }

    const metadata = await Image(src, {
        widths: srcset,
        formats: defaultFormats,
        outputDir: process.env.NODE_ENV === 'production' ? './_site/img/' : './_dev/img/',
        urlPath: '/img/',
        cacheOptions: {
            // if a remote image URL, this is the amount of time before it fetches a fresh copy
            duration: '365d',
        },
    });

    // const imageAttributes = {
    //     alt,
    //     sizes,
    //     //! Disable these if you want to lint responsive images during development.
    //     loading,
    //     decoding: 'async',
    // };

    const lowsrc = metadata.jpeg[0];

    if (!dev) {
        return `<picture>
                    <source type="image/avif" srcset="${metadata.jpeg
                        .map(entry => `https://fershad.com/image/fetch/f_avif,q_auto/${baseURL}${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
                    <source type="image/webp" srcset="${metadata.jpeg
                        .map(entry => `https://fershad.com/image/fetch/f_webp,q_auto/${baseURL}${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
                    <source type="image/jpeg" srcset="${metadata.jpeg
                        .map(entry => `https://fershad.com/image/fetch/f_jpg,q_auto/${baseURL}${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
          <img
            src="${lowsrc.url}"
            width="${lowsrc.width}"
            height="${lowsrc.height}"
            alt="${alt}"
            loading="${loading}"
            ${decoding ? 'decoding="async"' : ''}>
        </picture>`;
    }
    return `<picture>
                    <source type="image/jpeg" srcset="${metadata.jpeg
                        .map(entry => `${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
          <img
            src="${lowsrc.url}"
            width="${lowsrc.width}"
            height="${lowsrc.height}"
            alt="${alt}"
            loading="${loading}"
            ${decoding ? 'decoding="async"' : ''}>
        </picture>`;
}

async function pngImage(src, alt, customWidths, sizes, loading = 'lazy', decoding = true) {
    const defaultWidths = [300, 600, 1200];
    const defaultFormats = ['png'];
    let srcset;

    try {
        srcset = customWidths.split(',').map(x => +x);
    } catch {
        srcset = defaultWidths;
    }

    const metadata = await Image(src, {
        widths: srcset,
        formats: defaultFormats,
        outputDir: process.env.NODE_ENV === 'production' ? './_site/img/' : './_dev/img/',
        urlPath: '/img/',
        cacheOptions: {
            // if a remote image URL, this is the amount of time before it fetches a fresh copy
            duration: '365d',
        },
    });

    // const imageAttributes = {
    //     alt,
    //     sizes,
    //     //! Disable these if you want to lint responsive images during development.
    //     loading,
    //     decoding: 'async',
    // };

    const lowsrc = metadata.png[0];

    if (!dev) {
        return `<picture>
                    <source type="image/avif" srcset="${metadata.png
                        .map(entry => `https://fershad.com/image/fetch/f_avif,q_auto/${baseURL}${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
                    <source type="image/webp" srcset="${metadata.png
                        .map(entry => `https://fershad.com/image/fetch/f_webp,q_auto/${baseURL}${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
                    <source type="image/png" srcset="${metadata.png
                        .map(entry => `https://fershad.com/image/fetch/f_jpg,q_auto/${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
          <img
            src="${lowsrc.url}"
            width="${lowsrc.width}"
            height="${lowsrc.height}"
            alt="${alt}"
            loading="${loading}"
            ${decoding ? 'decoding="async"' : ''}>
        </picture>`;
    }
    return `<picture>
                    <source type="image/png" srcset="${metadata.png
                        .map(entry => `${entry.srcset}`)
                        .join(', ')}" sizes="${sizes}">
          <img
            src="${lowsrc.url}"
            width="${lowsrc.width}"
            height="${lowsrc.height}"
            alt="${alt}"
            loading="${loading}"
            ${decoding ? 'decoding="async"' : ''}>
        </picture>`;
}

async function svgImage(src, alt, loading = 'lazy') {
    const metadata = await Image(src, {
        formats: ['svg'],
        outputDir: process.env.NODE_ENV === 'production' ? './_site/svg/' : './_dev/svg/',
        urlPath: '/svg/',
    });

    const imageAttributes = {
        alt,
        loading,
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = { svgImage, rasterImage, pngImage };
