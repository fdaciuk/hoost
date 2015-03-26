#!/usr/bin/env node
'use strict';

var args = process.argv;
var exec = require( 'child_process' ).exec;
var program = require( 'commander' );
var pkg = require( '../package.json' );

program
  .version( pkg.version );

program.command( 'add <ip> <host>' )
  .description( 'Add a new host in /etc/hosts' )
  .action( require( './hoost-add' ) );

program.command( 'list' )
  .description( 'List all hosts in /etc/hosts' )
  .action( function() {
    console.log( '=======================' );
    console.log( '# /etc/hosts content:' );
    console.log( '=======================\n' );
    exec( 'cat /etc/hosts', function( err, stdout, stderr ) {
      if( err ) throw err;
      console.log( stdout );
    });
  });

program.parse( args );

// if( ! program.args.length ) {
//   program.help();
// }