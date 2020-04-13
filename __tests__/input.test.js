'use strict';

jest.mock('minimist');
const minimist = require('minimist');
const Input = require('../lib/input.js');

minimist.mockImplementation( ()=> {
  return {
    u: ':8080',
    m: 'post',
    b: 'test body',
    h: 'test header'
  }
});

describe('Input Module', () => {
  it('getMethod() uses a proper method when specified', () => {
    let options = new Input();
    expect(options.getMethod('get')).toEqual('get');
    expect(options.getMethod('post')).toEqual('post');
    expect(options.getMethod('put')).toEqual('put');
    expect(options.getMethod('delete')).toEqual('delete');
  });

  it('getURL() returns undefined if an invalid URL is present', () => {
    let options = new Input();
    expect(options.getURL('not-a-url')).toBeUndefined();
  });
});


