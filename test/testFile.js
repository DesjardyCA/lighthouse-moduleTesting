var assert = require('assert').strict;
var store = require('../store');

describe('store', function () {
  describe('#getList()', function () {
    it('should return a new Array containing everything in secureStorage', function () {
      assert.deepStrictEqual(store.getList(), [5, 3, 2, 1, 4]);
    });
  });
  describe('#getSortedList()', function () {
    it('should return a new Array containing everything in secureStorage and sorted in ascending order', function () {
      assert.deepStrictEqual(store.getSortedList(), [1, 2, 3, 4, 5]);
    });
  });
  describe('#addToList()', function () {
    it('should return a new Array containing the new addition along with everything else in secureStorage', function () {
      store.addToList(6)
      assert.deepStrictEqual(store.getList(), [5, 3, 2, 1, 4, 6]);
    });
  });
});