#!/usr/bin/env node
'use strict';

var args = process.argv;
var program = require( 'commander' );
var pkg = require( '../package.json' );

program
  .version( pkg.version );

program
  .command( 'add <ip> <host>' )
    .description( 'Add a new host in /etc/hosts' )
    .action( require( './hoost-add' ) );

program.parse( args );

// if( ! program.args.length ) {
//   program.help();
// }