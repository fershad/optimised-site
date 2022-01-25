const dev = process.env.NODE_ENV !== 'production';
const baseURL = dev ? 'http://localhost:8080' : 'https://optimised.email';
const title = 'Optimised';

const privacyURL = `${baseURL}/privacy/`;

module.exports = { dev, baseURL, privacyURL, title };
