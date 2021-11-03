//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './build/main.js',
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'app.build.js'
    },
    mode: "development"
};
