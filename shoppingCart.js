const products = [
  { name: "shampooo", price: 150, quantity: 6 },
  { name: "soap", price: 450, quantity: 2 },
  { name: "hair gel", price: 580, quantity: 3 },
  { name: "bath towel", price: 580, quantity: 2 },
];

function shoppingCart(products) {
  let sum = 0;
  for (const product of products) {
    const totalProducts = product.price * product.quantity;
    sum = sum + totalProducts;
  }
  return sum;
}
const totalShopping = shoppingCart(products);
console.log("total shopping: ", totalShopping);
