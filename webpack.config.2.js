const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/css_and_style_loader'),
    filename: 'my.bundle.css_and_style_loader.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  mode: 'development',
  devtool: "source-map",
};