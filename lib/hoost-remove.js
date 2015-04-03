'use strict';

var exec = require( 'child_process' ).exec;
var inquirer = require( 'inquirer' );

function hoostRemove( ip, host ) {
  var question = [{
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure?'
  }];
  inquirer.prompt( question, function( answers ) {
    console.log( answers );
  });
}

exports = module.exports = hoostRemove;