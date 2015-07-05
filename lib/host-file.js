'use strict';
/* istanbul ignore next */
module.exports = 'test' === process.env.NODE_ENV
  ? './hosts'
  : '/etc/hosts';
