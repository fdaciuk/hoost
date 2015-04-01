'use strict';

exports = module.exports = function hoostList() {
  var exec = require( 'child_process' ).exec;
  console.log( '=======================' );
  console.log( '# /etc/hosts content:' );
  console.log( '=======================\n' );
  exec( 'cat /etc/hosts', function( err, stdout, stderr ) {
    if( err ) throw err;
    console.log( stdout );
  });
};