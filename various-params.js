function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}

// evenSizedString("Noakhali");
// evenSizedString("Sylheti");
function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
// console.log(doubleOrTriple(20, true));
// console.log(doubleOrTriple(20, false));
function numberOfElements(numbers) {
  const leng = numbers.length;
  return leng;
}
const result = numberOfElements([12, 23, 4, 23, 4, 34, 34, 34, 4]);
// console.log(result);


function getAge(person) {
  const result = person.age;
  return age;
}


