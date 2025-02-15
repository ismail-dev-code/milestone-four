const faisal = 80;
const ismail = 70;
if (faisal > ismail) {
  console.log("Faisal will get biryani");
} else {
  console.log("Ismail will get biryani");
}
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const boroMia = getMax(90, 1150);
const boroMia2 = getMax(880, 30);
const ultimateMax = getMax(boroMia, boroMia2)
console.log(ultimateMax);
