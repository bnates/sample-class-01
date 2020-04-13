'use strict';

const isUrl = require('is-url'); // checks if something is a url
const minimist = require('minimist'); // works with command line args

const rules = {
  method: { required: true },
  url: { required: true },
  body: {},
  headers: {}
}

// api -m POST -u :3000 -b "some data" 

function Input() {
  const args = minimist(process.argv.slice(2)); // array of command line args
  this.method = this.getMethod(args.m);
  this.url = this.getURL(args.u);
  this.body = this.getBody(args.b);
  this.headers = this.getHeaders(args.h);
}

Input.prototype.getMethod = function(method = "") {
  // get the REST Method -> GET / POST / PUT / DELETE
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'get';
}

Input.prototype.getURL = function(url = "") {
  url = url.startsWith(':') ? `http://localhost${url}` : url;
  return isUrl(url) ? url : undefined;
}

Input.prototype.getBody = function(body = undefined) {
  // get the body string from the command line
  try {
    return JSON.parse(body);
  } catch (e) {
    return body;
  }
}

Input.prototype.getHeaders = function() {
  return undefined;
}

Input.prototype.valid = function() {
  // validates our object and data from the command line
  return Object.keys(rules).every(option => {
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;