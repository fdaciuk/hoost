'use strict';

var fs = require( 'fs' );
// var file = '/etc/hosts';
var file = './hosts';
var newhost;

function hoostAdd( ip, host ) {
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
  return data.toString().trim() + newhost;
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( newhost + ' saved!' );
}

exports = module.exports = hoostAdd;