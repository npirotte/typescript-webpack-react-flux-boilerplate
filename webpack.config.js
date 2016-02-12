/// <reference path="typings/node/node.d.ts"/>

var path = require('path');
var webpackShared = require('./webpack.shared');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.join(__dirname, 'node_modules');

var config = {
  // entry points - each will produce one bundled js file and one css file if there is any css in dependency tree
  entry: {
    vendors: [
      'flux',
      'react',
      'react-dom',
      'immutable'
    ],
    app: [
      path.join(__dirname, 'app', 'Index.tsx')
    ]
  },

  // This is path to loaders
  resolveLoader: {
    root: nodeModulesPath
  },

  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.less', '.css', '.scss'],
    modulesDirectories: ['node_modules', 'resources'],
    alias: {
      'react': path.join(nodeModulesPath, 'react', 'react.js'),
      'react-dom': path.join(nodeModulesPath, 'react-dom', 'dist', 'react-dom.js'),
      'flux': path.join(nodeModulesPath, 'flux', 'index.js')
    }
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    preLoaders: [
      { test: /\.ts(x?)$/, loader: 'tslint', include: path.resolve(__dirname, 'app') }
    ],
    noParse: [],
    loaders: [
      { test: /\.ts(x?)$/, loader: 'awesome-typescript-loader?instance=jsx', include: path.resolve(__dirname, 'app') }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors_[chunkhash].js'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ],

  tslint: {
    // Rules are in tslint.json
    emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
    formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
  }
};

if (webpackShared.isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {NODE_ENV: 'production'}
  }));
}

module.exports = config;
