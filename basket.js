var person = require('./person');
var storeItems = require('./store_items');

var basket = {
  owner: function(shopper){
    this.owner = shopper.name
  },
  basketItems: [],
  basketItemValues: [],
  totalValue: function(){
    //add all values in basketItemValues 
    var total = 0; 
    for(var i = 0; i < this.basketItemValues.length; i++ ){
      total += this.basketItemValues[i];
      // this['totalValue'] = total;
      
    }
      
     this.totalValue = total;
     return this.totalValue;
  }, 
  
  addItem: function(item){
    //add an if statement to check if item is in the store
    this.basketItems.push(item); 
    this.basketItemValues.push(storeItems[item]);
  },
  
  basketDiscount: function(){
    //if total value >= 20, apply a 10% discount and set total value accordingly
  },
  

  emptyBasket: function(){
    this.basketItems = [];
    this.basketItemValues = [];
  }
}

module.exports = basket;