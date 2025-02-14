function count_zero(binaryStr) {
  let zeroCount = 0;
  for (let str of binaryStr) {
    if (str === "0") {
      zeroCount++;

    }
  }
  return zeroCount;

}
const binaryStr = "101200435405000045 ";
const result = count_zero(binaryStr);
console.log(result);

