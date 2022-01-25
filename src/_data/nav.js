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
        link: `${baseURL}/contact/`,
        footerOnly: true,
    },
};
