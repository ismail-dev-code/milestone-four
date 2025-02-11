// *
// Looping technique
//1. for loop
// 2. while loop
// 3. do while = ignore eta ace shudhu eta jano
// 4. for of---->array loop korar jonno
// 5. for in--->object loop korar jonno

const friends = ["elon", "mark", "bill", "zuckerburg"];

// for (const friend of friends) {
//   // console.log(friend);
// }
// for (i = 0; i < friends.length; i++) {
// console.log(i);
// console.log(friends[i]);
// }
const numbers = [32, 3, 6476, 50, 557, 867, 896, 9, 8978, 97];
// for(let i = 0; i<numbers.length; i++){
// console.log(numbers[i]);
// }

// let i = 0;
// while (i < friends.length) {
//   i++;
//   console.log(friends[i]);
// }
let n = 0;
while (n < numbers.length) {
  console.log(numbers[n]);
  n++;
}
