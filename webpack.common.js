const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getCssLoader = (cssModulesMode) => {
  switch (cssModulesMode) {
    case "development":
      return {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[local]___[hash:base64:6]",
          },
          sourceMap: true,
        },
      };
    case "production":
      return {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: false,
        },
      };
    case null:
    default:
      return "css-loader";
  }
};

const getSassUse = (config) => {
  const defaultConfig = {
    cssModulesMode: null,
  };

  config = {
    ...defaultConfig,
    ...config,
  };

  return [
    "style-loader",
    getCssLoader(config.cssModulesMode),
    "sass-loader",
    // Share SASS variables, mixins and functions with all .sass files
    {
      loader: "sass-resources-loader",
      options: {
        resources: path.resolve(__dirname, "src/assets/styles/sass-resources.scss"),
      },
    },
  ];
};

const createCommonConfig = (mode) => {
  return {
    context: path.resolve(__dirname, "src"),
    resolve: {
      extensions: [".js", ".jsx"],
    },
    // Global variable "appConfig" (defined in ./app.config.js)
    // can be import from "appConfig"
    externals: "appConfig",
    entry: {
      bundle: "./index.jsx",
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
          use: "babel-loader",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        },
        {
          use: "file-loader?name=[path][name].[ext]",
          test: /\.(jpg|png|eot|svg|ttf|woff|woff2|otf|ico)$/,
        },
        {
          use: getSassUse({
            cssModulesMode: null,
          }),
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
        },
        {
          use: getSassUse({
            cssModulesMode: mode,
          }),
          test: /\.module\.scss$/,
        },
        {
          use: ["style-loader", "css-loader"],
          test: /\.css/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        // Add query string hash to app.config.js loaded in index.html
        configHash: +new Date(),
      }),
    ],
  };
};

module.exports = {
  createCommonConfig: createCommonConfig,
  getSassUse: getSassUse,
};
