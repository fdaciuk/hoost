'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

var testFiles = './test/*.js';
var coreFiles = './lib/*.js';
var allFiles = [ testFiles, coreFiles ];

gulp.task( 'test', function( cb ) {
  gulp.src( allFiles )
    .on( 'err', cb )
    .pipe( istanbul() )
    .on( 'finish', function() {
      gulp.src( allFiles )
      .pipe( mocha() )
      .on( 'error', cb )
      .pipe( istanbul.writeReports() )
      .on( 'end', cb );
    });
});

gulp.task( 'default', [ 'test' ], function() {
  gulp.watch( allFiles, [ 'test' ] );
});