// odd numbers ************
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }
// for (let i = 0; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let i = 1; i < 20; i+=2) {
//   console.log(i);
//   }
// for (let i = 50; i <= 200; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 5; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 50; i <= 200; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 50; i <= 200; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//     console.log(i);
//   }
// }
let sum = 0;
for (let i = 1; i < 30; i++) {
  if (i % 3 === 0) {
    sum = sum + i;
  }
}
console.log('total', sum);
