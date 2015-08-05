'use strict';

var exec = require( 'child_process' ).exec;
var fs = require( 'fs' );
var program = require( 'commander' );
var inquirer = require( 'inquirer' );
var file = require( './host-file' );
var removedHost;
require( 'colors' );

function hoostRemove( ip, host ) {
  if( !ip || !host ) return program.help();
  removedHost = ip + ' ' + host;
  if( program.forceYes ) return removeHost( ip, host );

  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'Entry ' + removedHost.red + ' will be removed. Are you sure?'
  }],
  function( answer ) {
    return answer.confirm && removeHost( ip, host );
  });
}

function removeHost( ip, host ) {
  fs.readFile( file, readFile );
}

function readFile( err, data ) {
  if( err ) throw err;
  fs.chmodSync( file, '0644' );
  fs.writeFile( file, getUpdatedData( data ), appendFile );
}

function getUpdatedData( data ) {
  var content = data.toString();
  var newContent = content.split( '\n' ).filter(function( item, index ) {
    return new RegExp( removedHost ).test( item ) ? '' : item;
  });
  return newContent.join( '\n' );
}

function appendFile( err ) {
  if( err ) throw err;
  console.log( removedHost + ' removed!' );
}

exports = module.exports = hoostRemove;