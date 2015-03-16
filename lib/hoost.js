#!/usr/bin/env node
'use strict';

var args = process.argv.slice( 2 );
var program = require( 'commander' );
var pkg = require( '../package.json' );

program
  .version( pkg.version )
  .parse( process.argv );