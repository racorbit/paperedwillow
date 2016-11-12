var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in app folder
  .pipe(gulp.dest(''))
});

gulp.task('sass', function() {
    return sass('sass/theme.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
   // Watch .nunjucks files
  gulp.watch('pages/**/*.+(html|nunjucks)', ['nunjucks']);
  gulp.watch('templates/**/*.+(html|nunjucks)', ['nunjucks']);
   // Watch .scss files
  gulp.watch('sass/*.scss', ['sass']);
 });

// Default Task
gulp.task('default', ['nunjucks', 'sass', 'watch']);
