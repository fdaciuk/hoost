'use strict';
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var hoost = './lib/hoost.js';

describe( 'HOOST #list', function() {
  it( 'Should list content in /etc/hosts', function( done ) {
    exec( hoost + ' list', function ( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /\.\/hosts content:/ );
      done();
    });
  });
});
