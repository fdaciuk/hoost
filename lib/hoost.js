#!/usr/bin/env node
'use strict';

var args = process.argv;
var exec = require( 'child_process' ).exec;
var program = require( 'commander' );
var hoostExtends = require( './hoost-extends' );
var pkg = require( '../package.json' );

hoostExtends();

program
  .version( pkg.version );

program
  .option( '-y, --force-yes', 'Force yes for any question' );

program.command( 'add <ip> <host>' )
  .description( 'Add a new host in /etc/hosts' )
  .action( require( './hoost-add' ) );

program.command( 'rm <ip> <host>' )
  .description( 'Remove any host in /etc/hosts' )
  .action( require( './hoost-remove' ) );

program.command( 'list' )
  .description( 'List all hosts in /etc/hosts' )
  .action( require( './hoost-list' ) );

program.parse( args );

if( ! args.slice(2).length ) program.help();