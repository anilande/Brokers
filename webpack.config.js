var webpack = require("webpack");
var path = require("path");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
    entry: './src/main',
    devtool: 'source-map',
    output: {
        path: './src/static',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader!sass-loader',
                })
            }
        ]
    },
    plugins: [extractCSS]
};
