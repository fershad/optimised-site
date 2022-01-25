const cheerio = require('cheerio');

module.exports = async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
        const $ = cheerio.load(content);

        $('article#post-content > aside + div').addClass('flow');
        return $.html();
    }

    return content;
};
