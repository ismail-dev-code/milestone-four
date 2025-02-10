let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'noakhali',
    isStudent: true
};
let count = 0;
for(let prop in student){
    count++;
}
console.log(count);