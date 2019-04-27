if (!global.document || !global.window) {
  require('babel-register');

  const {jsdom} = require('jsdom');

  global.document = jsdom('<html><head><script></script></head><body></body></html>', {
    FetchExternalResources: ['script'],
    ProcessExternalResources: ['script'],
    MutationEvents: '2.0',
    QuerySelector: false,
  });

  global.window = document.defaultView;
  global.navigator = global.window.navigator;
  global.location = global.window.location;
}

global.$ = global.jQuery = require('jquery/dist/jquery')(global.window);

const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;
global.proxyquire = proxyquire;
