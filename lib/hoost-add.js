'use strict';

var fs = require( 'fs' );
var program = require( 'commander' );
var file = require( './host-file' );
var newhost;

function hoostAdd( ip, host ) {
  if( !ip || !host ) return program.help();
  newhost = ip + ' ' + host;
  fs.readFile( file, readFile );
}

function readFile( err, data ) {
  if( err ) throw err;
  fs.writeFile( file, getUpdatedData( data ), appendFile );
}

function getUpdatedData( data ) {
  if( data.toString().trim() )
    newhost = '\n' + newhost;
  return data.toString().trim() + newhost + '\n';
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( newhost + ' saved!' );
}

exports = module.exports = hoostAdd;