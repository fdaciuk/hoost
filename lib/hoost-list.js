'use strict';

var file = require( './host-file' );
require( 'colors' );

exports = module.exports = function hoostList() {
  var exec = require( 'child_process' ).exec;
  console.log( '\n======================='.cyan );
  console.log( ( '# ' + file + ' content:' ).cyan );
  console.log( '=======================\n'.cyan );
  exec( 'cat ' + file, function( err, stdout, stderr ) {
    if( err ) throw err;
    console.log( stdout + '\n' );
  });
};