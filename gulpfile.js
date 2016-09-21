var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var neat = require('node-neat');

gulp.task('sass', function () {
	gulp.src('scss/emerald.scss')
		.pipe(plumber())
		.pipe(sass({
			includePaths: ['scss'].concat(neat)
		}))
		.pipe(gulp.dest('css'))
		.pipe(autoprefixer({
			browsers: ['> 5%']
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function () {
	gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
});
