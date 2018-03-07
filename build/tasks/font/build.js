const gulp = require('gulp')
const fontmin = require('gulp-fontmin')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../assets/fonts/**/*.ttf')
    .pipe(fontmin())
    .on('error', message.error('FONT: Minification'))
    .pipe(gulp.dest('../public/fonts'))
}
