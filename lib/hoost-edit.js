'use strict';

var exec = require( 'child_process' ).exec;
var fs = require( 'fs' );
var program = require( 'commander' );
var inquirer = require( 'inquirer' );
var file = require( './host-file' );
var actualHost;
var newHost;
require( 'colors' );

function hoostEdit( ip, host, newip, newhost ) {
  if( arguments.length < 5 ) return program.help();
  var args = arguments;
  actualHost = ip + ' ' + host;
  newHost = newip + ' ' + newhost;
  if( program.forceYes ) return editHost.apply( null, args );

  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'Entry ' + actualHost.red + ' will be changed to ' + newHost.red + '. Are you sure?'
  }],
  function( answer ) {
    return answer.confirm && editHost.apply( null, args );
  });
}

function editHost( ip, host, newip, newhost ) {
  fs.readFile( file, readFile );
}

function readFile( err, data ) {
  if( err ) throw err;
  fs.writeFile( file, getUpdatedData( data ), appendFile );
}

function getUpdatedData( data ) {
  var content = data.toString();
  var newContent = content.split( '\n' ).map(function( item, index ) {
    return actualHost === item ? newHost : item;
  });
  return newContent.join( '\n' );
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( actualHost + ' changed to ' + newHost + '!' );
}

exports = module.exports = hoostEdit;
