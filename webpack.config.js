const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-extraneous-dependencies
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'production',
  externals: [nodeExternals(), 'aws-sdk'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', './'],
    alias: {
      '@utils': path.resolve(__dirname, 'utils/'),
      '@functions': path.resolve(__dirname, 'functions/')
    },
    extensions: ['.js'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
};
