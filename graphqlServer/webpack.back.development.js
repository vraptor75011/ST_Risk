const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const glob = require('glob');

const common = require('./webpack.back.common.js');

module.exports = merge(common, {
  target: 'node',
  devtool: 'inline-source-map',
  entry: {
    //    hot: 'webpack/hot/poll?1000',
    backend: path.join(__dirname, 'src/index.ts'),
  },

  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?1000'],
    }),
  ],
  mode: 'development',
  cache: false,
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  watch: true,
});
