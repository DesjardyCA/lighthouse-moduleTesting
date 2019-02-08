var assert = require('assert');
var store = require('../store');

describe('store', function () {
  describe('#getList()', function () {
    it('should return a new Array containing everything in secureStorage', function () {
      assert.equal(store.getList(), []);
    });
  });
});