function spiceMine(yield) {
  let days = 0;
  let totalSpice = 0;
  while (yield >= 100) {
    totalSpice += yield;
    totalSpice -= 26;
    yield -= 10;
    days++;
  }
  if (totalSpice >= 26) {
    totalSpice -= 26;
  }
  console.log(days);
  console.log(totalSpice);
}
