const productItem={name:"TELEVISION",basePrice:25000,taxRate:0.05,
 calculateTaxedPrice:function(){return this.basePrice+(this.basePrice*this.taxRate);}};
console.log(`Final Price:$${productItem.calculateTaxedPrice()}`);
console.log(JSON.stringify(productItem));


