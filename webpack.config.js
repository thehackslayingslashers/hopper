const path = require('path');


module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
};