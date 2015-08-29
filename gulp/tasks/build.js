var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('build', function(){
  gulp.src('src/**/*.js').pipe(babel({
    stage: 0
  })).pipe(gulp.dest('build'));
  gulp.src('src/**/*.jsx').pipe(babel({
    stage: 0
  })).pipe(gulp.dest('build'));
});
