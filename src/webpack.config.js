const path = require('path');

module.exports = {
     entry: './app.jsx',
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
              presets:['es2015', 'react'],
              plugins: ["transform-decorators-legacy"]
            }
          }
        ]
     }
};