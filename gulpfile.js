var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('transpiler', function () {
	return gulp.src('js/learn.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});
