const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.js?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
