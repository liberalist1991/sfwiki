const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const resolveRoot = dir => path.resolve(__dirname, '../../', dir)
const resolvePwd = dir => path.resolve(process.cwd(), dir)

process.env.NODE_ENV = 'production';

module.exports = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  entry: {
    index: resolvePwd('libs/index.js')
  },
  output: {
    path: resolvePwd('dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    library: 'sflib',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
