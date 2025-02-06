const age = 40;
const ticketFare = 800;

if (age < 10) {
  console.log("Free");
} else if (age >= 10 && age <= 30) {
  const studentsDiscount = (ticketFare * 50) / 100;
  console.log(studentsDiscount);
} else if (age >= 31 && age <= 59) {
  console.log(ticketFare);
} else if (age >= 60) {
  seniorCitizen = (ticketFare * 15) / 100;
  payAmount = ticketFare - seniorCitizen;
  console.log(payAmount);
}
