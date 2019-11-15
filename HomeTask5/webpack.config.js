const path = require('path');
const HTMlWebpackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
//   mode: 'development',
  entry: {
    app: ["whatwg-fetch","@babel/polyfill", './src/index.js']
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [{loader :'style-loader'}, 
              {loader:'css-loader'}
            ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  plugins: [ new HTMlWebpackPlugin()
  ]
};