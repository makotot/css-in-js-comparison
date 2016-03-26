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
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'css in js comparison',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
