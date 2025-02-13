function evenOnlyNumber(numbers) {
  const evens = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
const numbers = [23, 8, 34, 3, 5, 44, 54, 6, 7];
const evens = evenOnlyNumber(numbers);
console.log("even numbers are", evens);

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = number + sum;
    }
  }
  return sum;
}
const numbers = [23, 8, 34, 3, 5, 44, 54, 6, 7];
const sumEvens = sumOfEvenNumbers(numbers);
console.log("sum of even numbers:", sumEvens);
