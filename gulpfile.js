'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var exec = require('child_process').exec;
var pkg = require('./package.json');

var testFiles = 'test/*.js';
var coreFiles = 'lib/*.js';
var allFiles = [ testFiles, coreFiles ];

gulp.task('test', function(cb) {
  process.env.NODE_ENV = 'test';
  gulp.src(coreFiles)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      gulp.src(allFiles)
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});

gulp.task('update-dependencies', function(cb) {
  var dependencies = Object.keys(pkg.dependencies);
  var devDependencies = Object.keys(pkg.devDependencies);
  var commandDependencies = 'npm i --save' + dependencies.reduce(reduce);
  var commandDevDependencies = 'npm i --save-dev' + dependencies.reduce(reduce);

  exec(commandDependencies + ' && ' + commandDevDependencies,
  function(err, stdout, stdin) {
    console.log(stdin);
  });

  function reduce(accumulated, item) {
    return accumulated + ' ' + item;
  }
});

gulp.task('default', [ 'test' ], function() {
  gulp.watch(allFiles, [ 'test' ]);
});
