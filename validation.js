function multiply(num1, num2) {
  const multi = num1 * num2;
  return multi;
}
const result = multiply(4, 2);
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "first name should be a string.";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const full = first + " " + second;
  return full;
}
const fullNam = fullName("abul", 'roton');
console.log(fullNam);
