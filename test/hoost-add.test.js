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
      console.log(stdin);
      stdin.should.match( /ERROR: Missing required argument "ip"/ );
      done();
    });
  });
});
