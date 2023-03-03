const path = require('path');
const Dotenv = require('dotenv-webpack');
const { ProvidePlugin } = require('webpack');
require('dotenv').config({ path: './.env' }); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      fs: false, // provide an empty implementation for fs
      process: require.resolve("process/browser"),
      path: require.resolve("path-browserify"), // provide a browser-safe implementation for path
      stream: require.resolve("stream-browserify"), // provide a browser-safe implementation for stream
      crypto: require.resolve("crypto-browserify"), // provide a browser-safe implementation for crypto
    },
  },
  plugins: [
    new Dotenv(),
    new ProvidePlugin({
      process: 'process/browser', // provide a browser-safe implementation for process
    }),
    function() {
        console.log(JSON.stringify(process.env));
      }
  ],
  node: {
    __dirname: false,
    __filename: false,
    global: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    ],
  },
};
