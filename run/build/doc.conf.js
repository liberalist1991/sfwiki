const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlAssetsVersionPlugin = require('html-assets-version-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const resolveRoot = dir => path.resolve(__dirname, '../../', dir)
const resolvePwd = dir => path.resolve(process.cwd(), dir)
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    doc: resolveRoot('docs/pc/index.js'),
    mobile: resolveRoot('docs/mobile/index.js')
  },
  output: {
    path: resolvePwd('dist'),
    publicPath: './',
    chunkFilename: '[name].js'
  },
  stats: {
    modules: false,
    children: false
  },

  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['doc'],
      template: resolveRoot('index.html'),
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['mobile'],
      template: resolveRoot('index.html'),
      filename: 'mobile.html',
      inject: true
    }),
    new HtmlAssetsVersionPlugin(),
    new CopyWebpackPlugin([
      { 
        from: resolvePwd('docs/img'),
        to: resolvePwd('dist/dist') 
      }
    ])
  ]
});
