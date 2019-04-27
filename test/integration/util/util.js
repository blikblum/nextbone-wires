const p = require('bluebird');
const request = p.promisify(require('request'));

const baseUrl = 'http://localhost:9000/';

module.exports = function() {
  this.visit = function(path) {
    return this.driver.get(baseUrl + path);
  };

  this.BeforeAll(() => request(`${baseUrl  }api/v1/colors/reset`));
};
