var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/assets/js/main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public/assets/js'),
    publicPath: '/assets/js/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          // Our app
          path.resolve(__dirname, '../src/assets/js')
        ],
        loaders: ['babel']
      }
    ]
  },

  node: {
    fs: "empty"
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-router': path.resolve('./node_modules/react-router'),
      classnames: path.resolve('./node_modules/classnames'),
    },
  }
};