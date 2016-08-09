const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, '../app/assets'),
    filename: 'javascripts/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  }
}
