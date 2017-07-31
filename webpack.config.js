const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlStringReplace = require('html-string-replace-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.js']
    },
    // Global variable 'config' (defined in /config.js)
    // can be import from 'config'
    externals: 'config',
    entry: {
        bundle: './index.js'
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
            template: './index.html'
        }),
        // Add query string hash to config.json loaded in index.html
        new HtmlStringReplace({
            patterns: [
                {
                    match: /src="..\/config.js"/g,
                    replacement: function (match) {
                        const timestamp = +new Date();

                        return 'src="../config.js?hash=' + timestamp + '"';
                    }
                },
            ]
        }),
        new CopyWebpackPlugin([{
            from: './assets',
            to: './assets'
        }])
    ]
};

module.exports = config;