'use strict';
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var pkg = require( '../package.json' );
var hoost = './lib/hoost.js';
var hosts = './hosts';

describe( 'HOOST #remove', function() {
  it( 'Should remove IP/HOST: 127.0.0.1 test.com.br in /etc/hosts',
  function( done ) {
    exec( hoost + ' rm 127.0.0.1 test.com.br -y',
    function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /removed!/ );
      done();
    });
  });
});
