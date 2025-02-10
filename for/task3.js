let sum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    sum = i + sum;
    console.log("sum of odd number:", sum);
  }
}
let sum2 = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum2 = i + sum2;
    console.log("sum of even number:", sum2);
  }
}
