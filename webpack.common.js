const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlStringReplace = require('html-string-replace-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // Global variable 'config' (defined in ./src/app.config.js)
    // can be import from 'config'
    externals: 'config',
    entry: {
        bundle: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/
            },
            {
                use: 'file-loader?name=[path][name].[ext]',
                test: /\.(jpg|png|eot|svg|ttf|woff|woff2|otf|ico)$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/
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
        // Add query string hash to app.config.json loaded in index.html
        new HtmlStringReplace({
            patterns: [
                {
                    match: /src="\.\/config\.js"/g,
                    replacement: function (match) {
                        const timestamp = +new Date();

                        return 'src="./config.js?hash=' + timestamp + '"';
                    }
                },
            ]
        })
    ]
};

module.exports = config;
