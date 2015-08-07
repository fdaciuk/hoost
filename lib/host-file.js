'use strict';

var os   = require( 'os' );
var path = require( 'path' );

/* istanbul ignore next */
module.exports = getHostsFile();

function getHostsFile() {
  if( 'test' === process.env.NODE_ENV )
    return './hosts';
  if( 'win32' === os.platform() )
    return path.join( process.env.SYSTEMROOT, '/system32/drivers/etc/hosts' );
  return '/etc/hosts';
}
