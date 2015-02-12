var gulp = require('gulp')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var gutil = require('gulp-util')
var size = require('gulp-size')
var cssmin = require('gulp-minify-css')
var prefix = require('gulp-autoprefixer')

var browserify = require('browserify')
var transform = require('vinyl-transform')
var webserver = require('gulp-webserver')
var build = require('./src/build')

var rework = require('gulp-rework')
var reworkNpm = require('rework-npm')
var reworkVars = require('rework-vars')
var reworkColors = require('rework-plugin-colors')
var reworkGrid = require('rework-flex-grid')
var reworkMedia = require('rework-custom-media')
var reworkMatch = require('rework-matches')

gulp.task('build', function() {
  var data = require('./src/data')
  build(data)
})

gulp.task('js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename)
    return b.bundle()
  })
  gulp.src('./src/app.js')
    .pipe(browserified)
    .pipe(rename('j.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('css', function() {
  return gulp.src('css/src/all.css')
    .pipe(
      rework(
        reworkNpm(),
        reworkVars(),
        reworkMedia(),
        reworkColors(),
        reworkGrid({
          numColumns: 12,
          classNames: {
            grid: 'g',
            row: 'r',
            col: 'c'
          },
          mediaQueries: {
            sm: '32rem',
            md: '48rem',
            lg: '64rem'
          }
        }),
        reworkMatch()
      )
    )
    .pipe(rename('c.css'))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix("last 3 versions"))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
  })

gulp.task('serve', function() {
  gulp.src('dist/')
    .pipe(webserver({}))
})

gulp.task('default', ['build', 'js', 'css', 'serve'], function() {
  gulp.watch(['src/**/*'], ['build', 'js'])
  gulp.watch(['css/src/**/*.css'], ['css'])
})
