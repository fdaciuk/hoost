'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

var testFiles = 'test/*.js';
var coreFiles = 'lib/*.js';
var allFiles = [ testFiles, coreFiles ];

gulp.task( 'test', function( cb ) {
  process.env.NODE_ENV = 'test';
  gulp.src( coreFiles )
    .pipe( istanbul() )
    .pipe( istanbul.hookRequire() )
    .on( 'finish', function() {
      gulp.src( allFiles )
        .pipe( mocha() )
        .pipe( istanbul.writeReports() )
        .on( 'end', cb );
    });
});

gulp.task( 'default', [ 'test' ], function() {
  gulp.watch( allFiles, [ 'test' ] );
});
