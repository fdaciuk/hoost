'use strict';
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var hoost = './lib/hoost.js';

describe( 'HOOST #edit', function() {
  it( 'Should edit IP/HOST: 127.0.0.1 test.com.br to 127.0.0.1 mytest.com.br',
  function( done ) {
    exec([
      hoost,
      ' edit 127.0.0.1 test.com.br 127.0.0.1 mytest.com.br -y && ',
      hoost,
      ' list'
    ].join( '' ), function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /127.0.0.1 mytest.com.br/gim );
      done();
    });
  });
});
