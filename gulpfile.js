
var gulp = require('gulp');
var gutil = require('gulp-util');

var argv = require('yargs').argv;
var browserify = require('gulp-browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var paths = {
  entrySrc: './assets/js/*.js',
  scriptSrc: './assets/js/*.js',
  buildScriptDir: './public/js/'
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
        // .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.buildScriptDir));
});

gulp.task('default', ['jshint', 'scripts']);

gulp.task('watch', function () {
    gulp.watch(paths.scriptSrc, ['scripts']);
});
