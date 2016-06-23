var webpackConfig = require('./webpack.base.conf');
var webpack = require('webpack');
var path = require('path');

const plugins = webpackConfig.plugins.slice();
plugins.push(
  new webpack.DefinePlugin({
    '__ENV__': '"dev"'
  })
);

module.exports = Object.assign({}, webpackConfig, {
  plugins: plugins
});
