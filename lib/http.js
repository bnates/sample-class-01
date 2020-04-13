'use strict';

const http = {};

http.fetch = function(opts) {
  if (opts) {
    console.log(`Fetching ${opts.url}`);
    console.log(`Method ${opts.method}`);
    console.log(`Headers ${opts.headers}`);
    console.log(`Body ${opts.body}`);
  }
}

module.exports = http;