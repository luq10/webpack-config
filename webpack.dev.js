const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const config = Merge(CommonConfig, {
    devtool: 'cheap-module-source-map'
});

module.exports = config;