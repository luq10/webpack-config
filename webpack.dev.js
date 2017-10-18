const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = Merge(CommonConfig, {
    devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),

		// Copy app.config to /dist folder.
		//
		// On production env this thinks will make by CI
        new CopyWebpackPlugin([
            { from: '../app.config.js', to: './app.config.js' }
        ])
    ]
});

module.exports = config;