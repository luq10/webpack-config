const path = require("path");

const { getSassUse } = require("../webpack.common.js");

module.exports = {
  stories: ["../stories/**/*.jsx"],
  addons: ["@storybook/react", "@storybook/addon-docs"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: getSassUse({
        cssModulesMode: null,
      }),
    });

    config.module.rules.push({
      test: /\.module\.scss$/,
      use: getSassUse({
        cssModulesMode: "development",
      }),
    });

    return config;
  },
};
