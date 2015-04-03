'use strict';

var file = require( './host-file' );

exports = module.exports = function hoostList() {
  var exec = require( 'child_process' ).exec;
  console.log( '=======================' );
  console.log( '# ' + file + ' content:' );
  console.log( '=======================\n' );
  exec( 'cat ' + file, function( err, stdout, stderr ) {
    if( err ) throw err;
    console.log( stdout );
  });
};