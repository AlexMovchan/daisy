var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

'use strict';
 
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('watch', ['webserver', 'sass'], function () {
  gulp.watch('app/**/*.sass', ['sass']);
});