const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const Merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

class CreateWidgetRunner {
  constructor(path) {
    this.path = path;
  }

  createFile({ inputPath, outputPath, data }) {
    fs.readFile(`${inputPath}/${this.path}`, 'utf8', (err, fileData) => {
      if (err) {
        throw err;
      }

      let newFileData = fileData;

      newFileData = newFileData.replace('[/*@FILE_NAMES*/]', JSON.stringify(data));
      newFileData = newFileData.replace('/*@BASE_URL*/', './'); // TODO: only for test
      const fileName = path.basename(this.path);

      fs.writeFileSync(`${outputPath}/${fileName}`, newFileData);
    });
  }

  apply(compiler) {
    compiler.hooks.done.tap('CreateWidgetRunner Plugin', (statsData) => {
      const data = statsData.compilation.chunks.reduce((res, chunk) => {
        const fileNames = chunk.files.filter(filename => /\.js$/.test(filename));

        return [...res, ...fileNames];
      }, []);

      data.push(`app.config.js?t=${Date.now()}`);

      this.createFile({
        inputPath: compiler.context,
        outputPath: compiler.outputPath,
        data,
      });
    });
  }
}

const config = Merge(CommonConfig, {
  devtool: 'source-map',
  mode: 'production',

  optimization: {
    minimize: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'IS_WIDGET': true,
      }
    }),
    new CopyWebpackPlugin([
      {from: './assets/images/favicon.png', to: './assets/images/favicon.png'},
      {from: './index.widget.html', to: './index.html'},
      {from: '../app.config.js', to: './app.config.js'}, // TODO only for test
    ]),
    new CreateWidgetRunner('./widgetRunner.js'),
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
