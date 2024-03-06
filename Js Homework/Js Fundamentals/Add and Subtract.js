function indexCalc(arr) {
    let originalArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
  }
    console.log(arr);
    console.log(originalArr.reduce((a, b) => a + b, 0));
    console.log(arr.reduce((a, b) => a + b, 0));
}

indexCalc([5, 15, 23, 56, 35]); // [5, 14, 21, 59, 31] 134 130