function make_avg(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum = num + sum;
  }
  return sum / numbers.length;
}

const numbers = [32, 2, 4, 6, 8, 12];
const result = make_avg(numbers);
console.log(parseFloat(result.toFixed(2)));
