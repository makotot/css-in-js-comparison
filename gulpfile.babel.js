import gulp from 'gulp'
import del from 'del'
import gutil from 'gulp-util'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.babel'

gulp.task('default', ['webpack-dev-server'])

gulp.task('webpack-dev-server', () => {
  let config = Object.create(webpackConfig)

  config.debug = true

  new WebpackDevServer(webpack(config), {
    contentBase: './dist',
    stats: {
      colors: true
    }
  })
  .listen(8080, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err)
    }

    gutil.log('[webpack-dev-server]', 'localhost:8080')
  })
})
