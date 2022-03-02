const cheerio = require('cheerio');
const slugify = require('slugify');

module.exports = async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
        const $ = cheerio.load(content);
        const tocArray = [];

        const isPost = !!$('article#post-content > aside + div');
        if (isPost) {
            const shareText = $('#share-text');
            const headings = $('article h2');
            $(headings).map(function(i, el) {
                const text = $(el).text();
                const slug = makeSlug(text);
                tocArray.push({
                    slug,
                    text,
                });

                return $(el).attr('id', slug);
            });

            if ($(headings).length > 0) {
                const toc = `<details open class="toc flow"><summary><h2 class="h5">Table of content</h2></summary><nav><ul class="flow">${makeTOC(
                    tocArray
                )}</ul></nav></details>`;

                $(toc).insertBefore($(shareText));
            }
        }

        return $.html();
    }

    return content;
};

const makeTOC = tocArray => tocArray.map(el => `<li><a href="#${el.slug}">${el.text}</a></li>`).join('');

const makeSlug = input =>
    slugify(input, {
        lower: true,
    });
