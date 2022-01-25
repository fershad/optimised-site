const readingTime = require('./lib/reading-time.js');

module.exports = function(readTime) {
    return readingTime(readTime, { speed: 175 });
};
