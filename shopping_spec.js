var basket = require('./basket'); 
var storeItems = require('./store_items');
var person = require('./person');
var assert = require('assert');

describe('basket', function(){
  it('Should be start empty', function(){
    assert.equal(0, basket.basketItems.length)
  });
  it('Should be able to be assigned an owner', function(){
    basket.owner(person);
         assert.equal("John Doe", basket.owner)
  });
  it('Should be able to have items put inside', function(){
    basket.addItem("beer");
    assert.equal(1, basket.basketItems.length)
  });
  

});