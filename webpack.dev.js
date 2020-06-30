const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { createCommonConfig } = require("./webpack.common.js");
const CommonConfig = createCommonConfig("development");

const config = merge(CommonConfig, {
  devtool: "cheap-module-source-map",
  mode: "development",
  devServer: {
    publicPath: path.resolve(__dirname, "/"),
    // Server can be visible also by your IP address in LAN
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  output: merge(CommonConfig.output, {
    // Cannot use [chunkhash] for chunk when use HMR
    filename: "[name].[hash].js",
  }),
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),

    new webpack.HotModuleReplacementPlugin(),

    // Copy app.config to /dist folder.
    //
    // On production env, this thing will be made by CI
    new CopyWebpackPlugin({
      patterns: [
        { from: "../app.config.js", to: "./app.config.js" },
        { from: "./assets/images/favicon.png", to: "./assets/images/favicon.png" },
      ],
    }),
  ],
});

module.exports = config;
