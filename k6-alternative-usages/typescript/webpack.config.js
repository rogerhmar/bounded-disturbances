const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '.'),
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
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
}