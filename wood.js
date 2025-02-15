function woodQuantity(chairWoodQuantity, tableWoodQuantity, bedWoodQuantity) {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 10;
  const totalChairWood = perChairWood * chairWoodQuantity;
  const totalTableWood = perTableWood * tableWoodQuantity;
  const totalBedWood = perBedWood * bedWoodQuantity;
  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}
const wood = woodQuantity(3, 5, 2);
console.log("total wood need:", wood);
function items(shirt, pant, shoe) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;
  const totalShirtPrice = shirtPrice * shirt;
  const totalPantPrice = pantPrice * pant;
  const totalShoePrice = shoePrice * shoe;
  const totalItemsPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalItemsPrice;
}
const result = items(2, 1, 2);
console.log("total items price:", result);

function bazarItems(fish, rice, dhal) {
  const perKgFish = 300;
  const perKgRice = 200;
  const PerKgDhal = 100;
  const fishPrice = fish * perKgFish;
  const ricePrice = rice * perKgRice;
  const dhalPrice = dhal * PerKgDhal;
  const totalPrice = fishPrice + ricePrice + dhalPrice;
  return totalPrice;
}
const result1 = bazarItems(2, 1, 1);
console.log("total bazar money need:", result1);
