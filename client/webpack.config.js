const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      fs: false, // provide an empty implementation for fs
      path: require.resolve("path-browserify"), // provide a browser-safe implementation for path
    },
  },
  plugins: [
    new Dotenv(),
  ],
  node: {
    fs: "empty",
  },
};
