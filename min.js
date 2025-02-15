const prices = [20000, 25000, 30000, 16000, 40000, 60000];
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const cheap = getMin(prices);
console.log("cheapest one is:", cheap);
