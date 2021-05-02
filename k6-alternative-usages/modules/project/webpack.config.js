const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  mode: 'production',
  entry: { // Split into separate bundles to minimize upload to k6 cloud
    external: './tests/import-external.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: "/node_modules/"
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      }
    ],
  },
  target: 'web',
  externals: /^k6(\/.*)?/,
  stats: {
    colors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  devtool: 'source-map'
}