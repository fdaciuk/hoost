'use strict';
var should = require( 'should' );
var exec = require( 'child_process' ).exec;
var hoost = './lib/hoost.js';
var pkg = require( '../package.json' );

describe( 'HOOST', function() {
  it( 'Should returns hoost version', function( done ) {
    exec( hoost + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.be.equal( pkg.version + '\n' );
      done();
    });
  });
});