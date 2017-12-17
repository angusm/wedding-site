const gulp = require('gulp');

const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

function handleError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('js', () => {
  return browserify({entries: './source/js/main.js', debug: true})
    .transform("babelify", {
      presets: ["es2015"],
    })
    .on('error', handleError)
    .bundle()
    .on('error', handleError)
    .pipe(source('main.min.js'))
    .on('error', handleError)
    .pipe(buffer())
    .on('error', handleError)
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', () => {
  return gulp.src('./source/sass/main.min.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .on('error', handleError)
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['css', 'js']);
gulp.task('default', ['css', 'js']);