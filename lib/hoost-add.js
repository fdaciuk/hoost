'use strict';

var fs = require( 'fs' );
var program = require( 'commander' );
var inquirer = require( 'inquirer' );
var file = require( './host-file' );
var newhost;

function hoostAdd( ip, host ) {
  if( !ip || !host ) return program.help();
  newhost = ip + ' ' + host;
  fs.readFile( file, readFile );
}

function readFile( err, data ) {
  if( err ) throw err;
  var updatedData = getUpdatedData( data );
  var mustWriteFile = writeFile( file, updatedData, appendFile );
  if( isThereAlreadyTheHost( data ) )
    return askToAddAgain( mustWriteFile );
  mustWriteFile();
}

function getUpdatedData( data ) {
  if( data.toString().trim() )
    newhost = '\n' + newhost;
  return data.toString().trim() + newhost + '\n';
}

function isThereAlreadyTheHost( data ) {
  return false;
}

function askToAddAgain( mustWriteFile ) {
  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'This host was added already. Do you like to add again?'
  }], function( answer ) {
    return answer.confirm && mustWriteFile();
  });
}

function writeFile( file, updatedData, appendFile ) {
  return function() {
    fs.writeFile( file, updatedData, appendFile );
  };
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( newhost + ' saved!' );
}

exports = module.exports = hoostAdd;
