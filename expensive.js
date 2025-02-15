const phones = [
  {
    Name: "oppo",
    Price: 20000,
    Color: "Black",
  },
  {
    Name: "nokia",
    Price: 30000,
    Color: "Black",
  },
  {
    Name: "iphone",
    Price: 120000,
    Color: "Black",
  },
  {
    Name: "redmi",
    Price: 40000,
    Color: "Black",
  },
];
function expensive(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.Price > max.Price){
        max = phone;
    }
 
  }
  return max;
}
const expensivePrice = expensive(phones);
console.log("expensive phone is:", expensivePrice);
