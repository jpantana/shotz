# shotz

npm init -y

{
  "name": "shotz",
  "version": "1.0.0",
  "description": "",
  "main": "src/javascripts/main.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production --module-bind js=babel-loader"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jpantana/shotz.git"
  },
  "keywords": [],
  "author": "Josh Pantana",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/jpantana/shotz/issues"
  },
  "homepage": "https://github.com/jpantana/shotz#readme"
}


npm install @babel/core @babel/preset-env babel-loader css-loader eslint eslint-config-airbnb-base eslint-loader eslint-plugin-import file-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass sass-loader webpack webpack-cli webpack-dev-server --save-dev

touch .gitignore
  package-lock.json
  node_modules/
  dist/
  build/

touch .babelrc
  {
    "presets": [
        "@babel/preset-env"
    ]
  }

touch .eslintignore
  webpack.config.js
  node_modules

touch .eslintrc
      {
      "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
      },
      "extends": "airbnb-base",
      "globals": {
        "document": true,
        "window": true,
        "$": true,
        "XMLHttpRequest": true,
        "allowTemplateLiterals": true
      },
      "rules": {
        "no-console": [2, { "allow": ["error"] }],
        "no-debugger": 1,
        "class-methods-use-this": 0,
        "linebreak-style": 0
      }
    }



      touch webpack.config.js
      const HtmlWebPackPlugin = require("html-webpack-plugin");
      const MiniCssExtractPlugin = require("mini-css-extract-plugin");
      module.exports = {
        entry: './src/javascripts/main.js',
        module: {
          rules: [
            {
              enforce: "pre",
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "eslint-loader"
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                  options: { minimize: true }
                }
              ]
            },
            {
              test: /\.scss$/,
              use: [
                MiniCssExtractPlugin.loader,
                  { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                  { loader: 'sass-loader', options: { sourceMap: true } },
              ],
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
            }
          ]
        },
        plugins: [
          new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          }),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
        ],
        output: {
          path: __dirname + "/build",
          filename: "bundle.js"
        }
      };


npm install axios bootstrap jquery popper.js --save

@import "~bootstrap/scss/bootstrap";

import 'bootstrap';

mkdir src
touch src/index.html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Test</title>
        </head>
        <body>
          
        </body>
        </html>

mkdir src/styles
touch src/styles/main.scss
mkdir src/javascripts
touch src/javascripts/main.js
      import '../styles/main.scss';

      console.error('hi');


"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production --module-bind js=babel-loader"
}