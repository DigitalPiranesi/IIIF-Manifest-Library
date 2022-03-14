//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './build/index.js',
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'I3F.build.js',
        library: 'I3F'
    },
    mode: "production"
};
