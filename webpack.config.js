const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/utah-expungements.js'),
  output: {
    filename: 'utah-expungements.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/src/index.html' }
      ]
    }
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
    alias: {
      moment: path.resolve(__dirname, 'node_modules/moment/min/moment.min.js'),
      lodash: 'lodash-es',
    },
  },
}
