let odd = 80;
let sum = 0;
while (odd <= 130) {
  odd++;
  if (odd % 2 === 1) {
    sum = sum + odd;
    console.log("odd sum:", sum);
  }
}
let even = 205;
let sum1 = 0;
while (even <= 310) {
  even++;
  if (even % 2 === 0) {
    sum1 = sum1 + even;
    console.log("even sum:", sum1);
  }
}
