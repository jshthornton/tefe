var webpackConfig = require('./webpack.base.conf');
var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');

const plugins = webpackConfig.plugins.slice();
plugins.push(
  new webpack.DefinePlugin({
    '__ENV__': '"lcl"'
  }),
  new webpack.HotModuleReplacementPlugin()
);
const entry = webpackConfig.entry.slice();
entry.unshift(
  'webpack-dev-server/client?http://0.0.0.0:8081', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  'react-hot-loader/patch'
);

// const _module = _.cloneDeep(webpackConfig.module);
// _module.loaders[0].loaders.unshift('react-hot');

module.exports = Object.assign({}, webpackConfig, {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  //module: _module
});