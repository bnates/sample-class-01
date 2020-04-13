'use strict';

const HTTP = require('../lib/http.js');

jest.spyOn(global.console, 'log');

describe('HTTP Module', () => {
  it('fetch() does nothing with invalid options', () => {
    HTTP.fetch();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('fetch() logs out our options', () => {
    HTTP.fetch({ url: 'fake-url'});
    expect(console.log).toHaveBeenCalledWith('Fetching fake-url');
    expect(console.log).toHaveBeenCalledTimes(4);
  })
})