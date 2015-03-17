'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

var testFiles = './tests/*.js';
var coreFiles = './lib/*.js';
var allFiles = [ testFiles, coreFiles ];

gulp.task( 'mocha', function() {
  gulp.src( testFiles, { read : false })
  .pipe(
    mocha({ reporter: 'list' })
  );
});

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

gulp.task( 'default', function() {
  gulp.watch( allFiles, [ 'test' ] );
});