var postcss = require('postcss');

module.exports = postcss.plugin('postcss-themer', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here
        css.replaceValues('amin', {fast: 'amin'}, function (origin, name) {
            console.log('origin is: ', origin, 'name is', name);
            return '#000';
        });

    };
});
