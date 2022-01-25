const wordCount = require('./lib/word-count.js');

module.exports = function(content) {
    return wordCount(content);
};
