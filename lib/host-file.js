'use strict';

var os   = require('os');
var path = require('path');

/* istanbul ignore next */
module.exports = 'test' === process.env.NODE_ENV
  ? './hosts'
  : ( 'win32' == os.platform() ? path.join( process.env.SYSTEMROOT, '/system32/drivers/etc/hosts' ) : '/etc/hosts' );
