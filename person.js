var basket = require('./basket');

var person = {
  name: "John Doe",
  discountCard: false,
  basket: function(){
    basket["owner"] = this.name;
  }
}



module.exports = person;