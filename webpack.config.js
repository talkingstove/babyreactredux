const path = require('path');

module.exports = {
     entry: ['babel-polyfill', 'whatwg-fetch', './app.jsx'],
     devtool: 'true',
     output: {
      filename: 'app.bundle.js'
     },
     module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude:/(node_modules|bower_components)/,
            loader :'babel-loader',
            query  :{
              presets:['babel-polyfill', 'es2015-loose', 'react'],
              plugins: ["transform-decorators-legacy"]
            }
          }
        ]
     }
};