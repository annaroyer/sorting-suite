const assert = require('chai').assert
const sort = require('../bubbleSort')

describe('bubbleSort', function(){
  context('sort function', function(){
    it ('sorts a collection', function(){
      assert.deepEqual(sort([5, 4, 3, 2, 1]), [ 1, 2, 3, 4, 5 ])
    })
  })
})
