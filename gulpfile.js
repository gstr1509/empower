var gulp = require('gulp')
/*var changed = require('gulp-changed')
var rename = require('gulp-rename');*/
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var dest = '../empower';
// minify new or changed HTML pages
gulp.task('html', function() {
    var htmlSrc = './app/**/*.html';
    gulp.src(htmlSrc)
        .pipe(gulp.dest(dest));
});
gulp.task('json', function() {
    var jsonSrc = './app/**/*.json';
    gulp.src(jsonSrc)
        .pipe(gulp.dest(dest));
});
gulp.task('scripts', function() {
    /* gulp.task('scripts', function () { */
    gulp.src([
     './app/core/lib/angular.js',
     './app/core/lib/angular-ui-router.js',
          './app/core/js/app.js',
            './app/components/**/*.js',
            './app/services/**/*.js',
              ])
        .pipe(concat('script.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(dest));
})
// CSS concat, auto-prefix and minify
gulp.task('css', function() {
    gulp.src(['./app/**/*.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dest + '/assets/css/'));
});
gulp.task('default', ['html','json','scripts', 'css'], function() {});
