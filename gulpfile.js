var gulp = require('gulp'),
		connect = require('gulp-connect'),
		concat = require('gulp-concat');


gulp.task('scripts', function() {
	gulp.src(['bower_components/noty/js/noty/packaged/jquery.noty.packaged.min.js','./angular-noty.js'])
			.pipe(concat('angular-noty.dist.js'))
			.pipe(gulp.dest('dist'))
});

gulp.task('connect', function() {
	connect.server();
});

gulp.task('default', ['scripts','connect']);