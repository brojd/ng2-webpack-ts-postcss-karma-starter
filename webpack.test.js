'use strict';

const path = require('path');

module.exports = {
  
  output: {
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  
  devtool: 'inline-source-map',
  
  resolve: {
    extensions: ['.ts']
  }
  
};