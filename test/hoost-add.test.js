'use strict';
var fs = require( 'fs' );
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var pkg = require( '../package.json' );
var hoost = './lib/hoost.js';
var hosts = './hosts';

describe( 'HOOST #add', function() {
  before(function( done ) {
    fs.readFile( hosts, function( err, data ) {
      if( err ) throw err;
      fs.writeFile( hosts, '', function() {
        done();
      });
    });
  });

  it( 'Should return error when don\'t pass params', function( done ) {
    exec( hoost + ' add', function( err, stdout, stdin ) {
      stdin.should.match( /ERROR: Missing required argument "ip"/ );
      done();
    });
  });

  it( 'Should add IP/HOST: 127.0.0.1 test.com.br in /etc/hosts',
  function( done ) {
    exec( hoost + ' add 127.0.0.1 test.com.br',
    function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /127.0.0.1 test.com.br saved!/ );
      done();
    });
  });

  it( 'Before to add, should ask if want to really add an exist host',
  function( done ) {
    exec([
      hoost,
      ' add 127.0.0.1 test.com.br && ',
      hoost,
      ' add 127.0.0.1 test.com.br'
    ].join( '' ), function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /has been added already/ );
      done();
    });
  });
});
