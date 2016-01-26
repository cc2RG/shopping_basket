var person = require('./person');
var storeItems = require('./store_items');

var basket = {
  owner: function(shopper){
    this.owner = shopper.name
  },
  basketItems: [],
  basketItemValues: [],
  totalValue: function(){

  }, //make a function to calculate totals 
  
  addItem: function(item){
    this.basketItems.push(item); 
    
  },
  
  basketDiscount: function(){

  },
  
  emptyBasket: function(){
    this.basketItems = [];
  }
}

module.exports = basket;