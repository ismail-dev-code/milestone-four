const products = [
  { name: "shampooo", price: 150, brand: "flproductsbd" },
  { name: "soap", price: 450, brand: "keya cosmetics" },
  { name: "hair gel", price: 580, brand: "uniliver" },
];
function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}
const totalShopping = getShoppingTotal(products);
console.log('total cost is:', totalShopping);