async function share() {
    const url = document.querySelector('link[rel="canonical"]')
        ? document.querySelector('link[rel="canonical"]').getAttribute('href')
        : window.location.url;
    const title = document.querySelector('title').text;
    const text = document.querySelector('meta[name="description"]')
        ? document.querySelector('meta[name="description"]').text
        : '';
    const shareData = {
        url,
        title,
        text,
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            console.log('Shared', shareData);
        } catch (err) {
            console.log(err);
        }
    } else {
        // native share API not supported.
        // fallback to twitter
        let tweetUrl = 'https://twitter.com/intent/tweet';
        tweetUrl += `?url=${encodeURIComponent(shareData.url)}`;
        tweetUrl += `&text=${encodeURIComponent(shareData.text)}`;

        window.open(tweetUrl, '_blank');
        this.emitEvent('shared', shareData);
    }
}

module.exports = { share };
