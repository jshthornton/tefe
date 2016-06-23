var webpackConfig = require('./webpack.base.conf');
var webpack = require('webpack');
var path = require('path');

const plugins = webpackConfig.plugins.slice();
plugins.push(
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new webpack.DefinePlugin({
    '__ENV__': '"prd"'
  })
);

module.exports = Object.assign({}, webpackConfig, {
  plugins: plugins
});