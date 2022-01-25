const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const siteFolder = !dev ? '_site' : '_dev';

module.exports = async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
        const styles = path.join(__dirname, `/../../../.cache/main.css`);
        const pattern = /<\/head>/s;

        const linkToFile = `<link href="/assets/css/main.css" rel="stylesheet" media="print" onload="this.media='all'">`;
        return content.replace(pattern, `${linkToFile}</head>`);
    }
    return content;
};
