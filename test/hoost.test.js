'use strict';
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var pkg = require( '../package.json' );
var hoost = './lib/hoost.js';

describe( 'HOOST', function() {
  it( 'Should returns hoost version', function( done ) {
    exec( hoost + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.be.equal( pkg.version + '\n' );
      done();
    });
  });
});
