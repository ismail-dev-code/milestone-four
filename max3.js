const noakhali = 1154;
const pagla = 287;
const sylethi = 2289;
if (noakhali > pagla && noakhali > sylethi) {
  console.log("noakhali is the boss");
} else if (pagla > sylethi && pagla > noakhali) {
  console.log("pagla is the real boss");
} else {
  console.log("sylethi is the true boss");
}
function maxOfThree(num1, num2, num3) {
  if ((num1 > num2) & (num1 > num3)) {
    return num1;
  } else if (num2 > num3 && num2 > num1) {
    return num2;
  } else {
    return num3;
  }
}
const max = maxOfThree(32, 115, 56);
console.log("max number of three:", max);

const max1 = Math.max(2, 4, 32, 42, 45, 25, 45, 45, 45);

console.log('max num of math', max1);