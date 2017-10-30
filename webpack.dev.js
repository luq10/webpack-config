const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = merge(CommonConfig, {
    devtool: 'cheap-module-source-map',
    devServer: {
        publicPath: path.resolve(__dirname, '/'),
        // Server can be visible also by your IP address in LAN
        host: '0.0.0.0',
        port: 3000,
        hot: true
    },
    output: merge(CommonConfig.output, {
        // Cannot use [chunkhash] for chunk when use HMR
        filename: '[name].[hash].js'
    }),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        // Copy config to /dist folder.
        //
        // On production env, this thing will be made by CI
        new CopyWebpackPlugin([
            { from: './config.js', to: CommonConfig.output.path + '/config.js' }
        ])
    ]
});

module.exports = config;
