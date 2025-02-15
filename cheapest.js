const mobiles = [
  {
    name: "Samsung",
    Price: 20000,
    camera: "12MP",
    color: "black",
  },
  {
    name: "xiomi",
    Price: 15000,
    camera: "10MP",
    color: "black",
  },
  {
    name: "oppo",
    Price: 10000,
    camera: "8MP",
    color: "black",
  },
  {
    name: "nokia",
    Price: 30000,
    camera: "12MP",
    color: "black",
  },
];
function getCheapestPhone(mobiles) {
  let min = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.Price < min.Price) {
      min = mobile;
    }
  }
  return min;
}
const cheapPrice = getCheapestPhone(mobiles);
console.log("cheapest mobile is:", cheapPrice);
