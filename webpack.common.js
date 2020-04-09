const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  // Global variable "appConfig" (defined in ./app.config.js)
  // can be import from "appConfig"
  externals: "appConfig",
  entry: {
    bundle: "./index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
          }
        ]
      },
      {
        use: "file-loader?name=[path][name].[ext]",
        test: /\.(jpg|png|eot|svg|ttf|woff|woff2|otf|ico)$/
      },
      {
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          // Share SASS variables, mixins and functions with all .sass files
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "src/assets/styles/sass-resources.scss"),
            },
          },
        ],
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
        ],
        test: /\.css/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      // Add query string hash to app.config.js loaded in index.html
      configHash: +new Date()
    })
  ]
};

module.exports = config;
