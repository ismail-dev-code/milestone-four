const computer = {
  brand: "HP",
  price: 700000,
  processor: "intel core i5",
  hdd: "512gb",
  ownerDetails: {
    name: "omuker nam tomuk",
    profession: "uradura kaj",
    address: "noakhali thaki re ba",
    parentName: {
      father: "ekta ace",
      mother: "arekta ace",
    },
  },
};
delete computer.hdd;
computer.ownerDetails.parentName.father = "hate change hoice re ";
// console.log(computer.ownerDetails.parentName.father);
// console.log(computer.ownerDetails.name);
console.log(computer);