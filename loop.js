const mobile = {
  name: "redmi",
  brand: "abul company",
  memory: "800gb",
  originCountry: "noakhali",
};
for (const prop in mobile) {
  // console.log(prop);
  // console.log(mobile[prop]);
}
const keys = Object.keys(mobile);
console.log(keys);
for (const key of keys) {
  console.log(key, ':', mobile[key]);
}
