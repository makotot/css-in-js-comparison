import gulp from 'gulp'
import del from 'del'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import run from 'run-sequence'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.babel'
import normalize from 'postcss-normalize'
import cssnano from 'cssnano'

gulp.task('default', ['webpack-dev-server'])
gulp.task('serve', () => {
  run('clean', ['css', 'webpack-dev-server'], 'watch')
})

gulp.task('clean', (cb) => {
  return del([
    './dist'
  ], cb)
})

gulp.task('css', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(postcss([
      normalize,
      cssnano,
    ]))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['css'])
})

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
