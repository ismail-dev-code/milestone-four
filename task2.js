function oddOrEven(number) {
  if (number % 2 !== 0) {
    let odd = number * 2;
    console.log("number is odd:", odd);
    return odd;
  } else {
    let even = number / 2;
    console.log("number is even:", even);
    return even;
  }
}

oddOrEven(17);
oddOrEven(20);
