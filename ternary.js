// ternary == 3 parts **
const age = 20;
// normal if-else
if(age>= 18){
    console.log("you can vote.");
}
else{
    console.log("ghumai thako");
}
// simple ternary
age > 18 ? console.log("vote dio") : console.log("ghumai tahko");

let price = 500;
const isLeader = true;
// if (isLeader === false) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);
price = isLeader === true ? 0 : price + 100;
console.log(price);