'use strict';
var fs = require( 'fs' );
var exec = require( 'child_process' ).exec;
var should = require( 'should' );
var pkg = require( '../package.json' );
var hoost = './lib/hoost.js';
var hosts = './hosts';

describe( 'HOOST', function() {
  before(function( done ) {
    fs.readFile( hosts, function( err, data ) {
      if( err ) throw err;
      fs.writeFile( hosts, '', function() {
        done();
      });
    });
  });

  it( 'Should returns hoost version', function( done ) {
    exec( hoost + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.be.equal( pkg.version + '\n' );
      done();
    });
  });

  it( 'Should add IP/HOST: 127.0.0.1 test.com.br in /etc/hosts', function( done ) {
    exec( hoost + ' add 127.0.0.1 test.com.br', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /127.0.0.1 test.com.br saved!/ );
      done();
    });
  });

  it( 'Should list content in /etc/hosts', function( done ) {
    exec( hoost + ' list', function ( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /\/etc\/hosts content:/ );
      done();
    });
  });
  });
});