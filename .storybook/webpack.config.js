const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      // Share SASS variables, mixins and functions with all .sass files
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/styles/sass-resources.scss'),
        },
      },
    ],
  });

  return config;
};
