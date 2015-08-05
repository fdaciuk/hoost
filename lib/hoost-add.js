'use strict';

var fs = require( 'fs' );
var program = require( 'commander' );
var file = require( './host-file' );
require( 'colors' );
var newhost;

function hoostAdd( ip, host ) {
  if( !ip || !host ) return program.help();
  newhost = ip + ' ' + host;
  fs.readFile( file, readFile );
}

function readFile( err, data ) {
  if( err ) throw err;
  var justUserEntry = newhost.trim();
  if( isThereAlreadyTheHost( data ) )
    return console.log( 'The host ' + justUserEntry.red + ' has been added already.' );
  fs.chmodSync( file, '0644' );
  fs.writeFile( file, getUpdatedData( data ), appendFile );
}

function getUpdatedData( data ) {
  if( data.toString().trim() )
    newhost = '\n' + newhost;
  return data.toString().trim() + newhost + '\n';
}

function isThereAlreadyTheHost( data ) {
  var newHost = newhost.trim();
  return data.toString().indexOf( newHost ) > -1;
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( newhost + ' saved!' );
}

exports = module.exports = hoostAdd;
