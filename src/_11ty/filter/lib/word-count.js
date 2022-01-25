module.exports = function wordCount(htmlContent) {
    const content = htmlContent.replace(/(<([^>]+)>)/gi, '');
    const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
    const count = matches !== null ? matches.length : 0;

    return count;
};
