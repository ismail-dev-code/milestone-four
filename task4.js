const score = 30;
if (score > 80) {
  console.log("go for lunch");
} else {
  if (score < 80 && score >= 60) {
    console.log("good luck next time");
  } else {
    if (score < 60 && score >= 40) {
      console.log("massage unseen");
    } else {
      if (score < 40) {
        console.log("block friend");
      }
    }
  }
}
