
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var argv = require('yargs').argv;
var browserify = require('gulp-browserify');
var buffer = require('vinyl-buffer');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var paths = {
  entrySrc: './assets/js/*.js',
  entrySCSS: './assets/sass/*.scss',
  scriptSrc: './assets/js/*.js',
  buildScriptDir: './public/js/',
  buildCSSDir: './public/css/'
};

gulp.task('jshint', function() {
    gulp.src(paths.entrySrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', function() {
    gulp.src(paths.entrySrc)
        .pipe(browserify())
        .on('error', function(err){
            console.log(err);
            throw err;
        })
        .pipe(buffer())
        .pipe(gulp.dest(paths.buildScriptDir));
});

gulp.task('styles', function() {
    gulp.src(paths.entrySCSS)
        .pipe(sass())
        .pipe(gulp.dest(paths.buildCSSDir));
});

gulp.task('default', ['jshint', 'scripts']);

gulp.task('watch', function () {
    gulp.watch(['./assets/js/*.js', './assets/js/**/*.js', './assets/js/**/**/*.js'], ['scripts']);
});
