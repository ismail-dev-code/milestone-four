const person = {
  name: "abul",
  profession: "tea seller",
  address: "o noakhali thake re ba",
  salary: 20000,
  married: false,
  "fav places": ["hatiya", "cox bazar", "nokhali"],
};
person.salary = 40000;
// console.log(person);
person["fav places"] = ["madives", "indonesia", "pataya"];
// console.log(person);
const keyName = person['profession'];
console.log(keyName);
