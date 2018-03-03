const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
  gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);
