const { baseURL } = require('./site');

module.exports = {
    home: {
        title: 'Archive',
        link: `${baseURL}`,
        // footerOnly: true,
    },
    series: {
        title: 'Series',
        link: `${baseURL}/series/`,
    },
    contact: {
        title: 'Contact',
        link: `mailto:itsfish@fershad.com`,
        footerOnly: true,
    },
};
