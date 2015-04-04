'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

var testFiles = './test/*.js';
var coreFiles = './lib/*.js';
var allFiles = [ testFiles, coreFiles ];

gulp.task( 'test', function( cb ) {
  process.env.NODE_ENV = 'test';
  gulp.src( allFiles )
    .pipe( istanbul() )
    .pipe( istanbul.hookRequire() )
    .on( 'finish', function() {
      gulp.src( testFiles )
      .pipe( mocha() )
      .pipe( istanbul.writeReports() )
      .on( 'end', cb );
    });
});

gulp.task( 'default', function() {
  gulp.watch( allFiles, [ 'test' ] );
});