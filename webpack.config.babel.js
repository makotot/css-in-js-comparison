import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/app.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'css in js comparison'
    })
  ]
}
