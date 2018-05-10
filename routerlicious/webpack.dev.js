const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');

console.log("dev");
module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "public/scripts/dist"),
        filename: '[name].js',
        library: "prague_[name]"
    },
})