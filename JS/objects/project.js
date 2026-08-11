const product = { name: "Chair", price: 235, inStock: true, dismensions: {height: 120, width: 60}, getSummary: function() {return `${this.name} - ${this.price}`}}


console.log(product.dismensions.height)
console.log(product.getSummary())