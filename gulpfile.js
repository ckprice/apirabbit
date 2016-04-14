var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var eslint = require('gulp-eslint');
var appRoot = process.cwd();

gulp.task("bundle", function () {
    return browserify({
        entries: ["./app/createAPI.jsx"],
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task('copy', ['bundle'], function () {
    return gulp.src(['app/index.html',
        'app/lib/bootstrap-css/css/bootstrap.min.css',
        'app/lib/bootstrap-css/js/bootstrap.min.js',
        'app/lib/jquery-1.12.3.min.js',
        'app/style.css'])
        .pipe(gulp.dest('app/dist'));
});

gulp.task('lint', function() {
  return gulp.src(['*.js', '*.jsx',
        appRoot + '/app/**/*.js',
        appRoot + '/server/**/*.js',
        appRoot + '/app/**/*.jsx']).pipe(eslint({
    'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
  }))
  .pipe(eslint({
            globals: {
                "require": true,
                $: true,
                "process": true,
                "module": true,
                "document": true,
                "__dirname": true,
                "print": true,
                "console": true,
                "jQuery": false
            }
        }))
  .pipe(eslint.format())
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});


gulp.task('watch', function() {
    gulp.watch([appRoot + '/app/style.css',
        appRoot + '/app/**/*.jsx',
        appRoot + '/app/stores/*.js',
        appRoot + '/app/*.jsx',
        appRoot + '/app/index.html',
        appRoot + '/server/**/*.js',
        appRoot + '/server/*.js'],
        ['copy','lint']);
});

gulp.task("default",['copy','lint','watch'],function(){ });