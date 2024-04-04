function digitAverageEquals5(number) {
  while (!digitSumAverage()) {
    number = number.toString() + "9";
  }

  function digitSumAverage() {
    let sum = 0;
    let nums = number.toString().split("").map(Number);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum / nums.length > 5;
  }
  console.log(number);
}
digitAverageEquals5(101); // 1019
digitAverageEquals5(5835); // 58359
