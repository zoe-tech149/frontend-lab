const products = [
  {
    id: 1,
    name: "Sunflower", 
    price: 2399, 
    quantity: 1,
  },
  {
    id: 2,
    name: "Lilies", 
    price: 1499, 
    quantity: 2,
  },
  {
    id: 3,
    name: "Tulips", 
    price: 1999, 
    quantity: 1,
  },
]


const sunflowerSubtotal = products[0].price * products[0].quantity;

const liliesSubtotal = products[1].price * products[1].quantity;

const tulipsSubtotal = products[2].price * products[2].quantity;

const cartTotal = sunflowerSubtotal + liliesSubtotal + tulipsSubtotal;

products[1].quantity = 3;

console.log(products[1].quantity);
console.log(liliesSubtotal);
console.log(cartTotal);

const updatedLiliesSubtotal =
products[1].price * products[1].quantity;

console.log(updatedLiliesSubtotal);
console.log(cartTotal);

