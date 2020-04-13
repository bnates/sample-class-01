'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();

// this is the app doing it's thing
options.valid() ? HTTP.fetch(options) : help();


function help() {
  console.log(`
    API USAGE: api -m <method> -u <url> -b '<body>'

    -m - HTTP METHOD (get/post/put/delete)
    -u - URL (your API url - can just use the port for localhost)
    -b - BODY (content or body of a POST or PUT request)
  `);

  process.exit();
}