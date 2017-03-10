const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '/'),
  entry: path.resolve(__dirname, 'entry.js'),
  module: {
    rules: [
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/'
  },
  target: 'electron'
};