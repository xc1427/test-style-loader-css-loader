const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/css_loader'),
    filename: 'my.bundle.css_loader.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['css-loader'] }
    ]
  },
  mode: 'development',
  devtool: "source-map",
};