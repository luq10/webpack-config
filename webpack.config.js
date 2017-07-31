const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors'],
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: './assets'
        }])
    ]
};

/**
 *
 * TODO:
 *
 * 1. SASS
 * 3. maps for bundles .js
 */

module.exports = config;