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

  it( 'Before to add, should ask if we want to really add an exist host in /etc/hosts', function( done ) {
    exec( hoost + ' add 127.0.0.1 test.com.br && ' + hoost + ' add 127.0.0.1 test.com.br', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /has been added already/ );
      done();
    });
  });

  it( 'Should list content in /etc/hosts', function( done ) {
    exec( hoost + ' list', function ( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /\.\/hosts content:/ );
      done();
    });
  });

  it( 'Should edit IP/HOST: 127.0.0.1 test.com.br to 127.0.0.1 mytest.com.br', function( done ) {
    exec( hoost + ' edit 127.0.0.1 test.com.br 127.0.0.1 mytest.com.br -y && ' + hoost + ' list', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /127.0.0.1 mytest.com.br/gim );
      done();
    });
  });

  it( 'Should remove IP/HOST: 127.0.0.1 test.com.br in /etc/hosts', function( done ) {
    exec( hoost + ' rm 127.0.0.1 test.com.br -y', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.should.match( /removed!/ );
      done();
    });
  });
});
