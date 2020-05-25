const path = require("path");

module.exports = {
  stories: ["../stories/**/*.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        },
        include: [path.resolve(__dirname)],
      },
    },
    "@storybook/react",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        // Share SASS variables, mixins and functions with all .sass files
        {
          loader: "sass-resources-loader",
          options: {
            resources: path.resolve(__dirname, "../src/assets/styles/sass-resources.scss"),
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[local]___[hash:base64:6]",
            },
            sourceMap: true,
          },
        },
        "sass-loader",
        // Share SASS variables, mixins and functions with all .sass files
        {
          loader: "sass-resources-loader",
          options: {
            resources: path.resolve(__dirname, "../src/assets/styles/sass-resources.scss"),
          },
        },
      ],
    });

    return config;
  },
};
