'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client', './demo/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
          },
        ],
        type: 'javascript/auto',
        include: [
          path.join(__dirname, 'demo'),
          path.join(__dirname, 'node_modules/entities/lib/maps'),
          path.join(
            __dirname,
            'node_modules/sanitize-html/node_modules/entities/maps'
          ),
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      url: require.resolve('url/'),
    },
  },
};
