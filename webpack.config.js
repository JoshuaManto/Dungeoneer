const path = require('path');
const webpack = require('webpack');
// const css = require('file.css');

// console.log(process.env.NODE_ENV);

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api/**': 'http://localhost:3000',
      '/assets/**': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\.(s*)css$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
      {
        test: /\.(s*)css$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: 'style-loader' },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true
            }
          },
          // Compiles Sass to CSS
          { loader: 'sass-loader' }
          // url
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
