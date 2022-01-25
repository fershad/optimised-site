const dev = process.env.NODE_ENV !== 'production';

module.exports = async function() {
    if (dev) {
        return `<!-- Fathom - beautiful, simple website analytics -->`;
    }

    return `<!-- Fathom - beautiful, simple website analytics -->
    <script
    src="https://cdn.usefathom.com/script.js"
    data-site='GYXRKGAO' 
data-canonical="false" 
    defer></script>
    <!-- / Fathom -->`;
};
