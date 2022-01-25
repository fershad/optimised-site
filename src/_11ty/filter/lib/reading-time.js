const wordCount = require('./word-count.js');

module.exports = function readingTime(postOrContent, { printSeconds = false, raw = false, speed = 175 } = {}) {
    const htmlContent = typeof postOrContent === 'string' ? postOrContent : postOrContent.templateContent;

    if (!htmlContent) {
        return `0 ${printSeconds ? 'seconds' : 'minutes'}`;
    }

    const count = wordCount(postOrContent);

    let est = '';

    if (printSeconds === true) {
        const min = Math.floor(count / speed);
        const sec = Math.floor((count % speed) / (speed / 60));

        if (raw === false) {
            const mins = `${min} minute${min === 1 ? '' : 's'}, `;
            const secs = `${sec} second${sec === 1 ? '' : 's'}`;
            est = min > 0 ? mins + secs : secs;
        } else {
            est = min * 60 + sec;
        }
    } else {
        const min = Math.ceil(count / speed);

        if (raw === false) {
            est = `${min} min${min === 1 ? '' : 's'}`;
        } else {
            est = min;
        }
    }

    return est;
};
