const webpack = require("webpack");
const path = require("path");
const Merge = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const CommonConfig = require("./webpack.common.js");

const config = Merge(CommonConfig, {
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      // TODO:
      //
      // Define loaders for files test: /\.module\.scss$/ in common
      // here, we need only disable sourceMap for "css-loader"
      {
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          "sass-loader",
          // Share SASS variables, mixins and functions with all .sass files
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "src/assets/styles/sass-resources.scss"),
            },
          },
        ],
        test: /\.module\.scss$/
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new CopyWebpackPlugin([
      {from: "./assets/images/favicon.png", to: "./assets/images/favicon.png"}
    ]),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});

module.exports = config;
