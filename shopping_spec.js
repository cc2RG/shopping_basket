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
    assert.equal("beer", basket.basketItems[0])
  });
  it('should be able to store the values of items', function(){
    basket.emptyBasket();
    basket.addItem("beer");
    var value = basket.basketItemValues[0];
    assert.equal(6.50, value)
  });

});