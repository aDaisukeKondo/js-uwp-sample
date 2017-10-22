const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: false,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'js-uwp-sample/js/')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: false
      }
    })
  ]
};

