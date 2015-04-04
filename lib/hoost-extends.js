'use strict';

var program = require( 'commander' );
require( 'colors' );

function hoostExtends() {
  program.Command.prototype.missingArgument = missingArgument;
}

function missingArgument( name ) {
  console.error( '\n  ERROR: Missing required argument "%s"'.red, name );
  program.help();
  process.exit(1);
}

exports = module.exports = hoostExtends;