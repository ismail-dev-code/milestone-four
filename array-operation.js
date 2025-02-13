// objective: write a function to give me the sum of all numbers in an array
// *step-1: declare a function
// *step-2: call check wether the function working properly.
// *step-3: set a parameter(s)
// *step-4: pass the parameter(s), check wether parameter is passed in a proper format.
// *step-5: do the function tasks (step by step)

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum = num + sum;
}
return sum;
}

const numbs = [12, 3, 4, 54, 65, 76, 7];
const sum = sumOfNumbers(numbs);

console.log("sum of numbers is", sum);
