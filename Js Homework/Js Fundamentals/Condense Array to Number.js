function condenseArrayToNumber(arr) {
  let condensed = [];

  if (arr.length === 1) {
    console.log(arr[0]);
    return;
  }

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      condensed[i] = arr[i] + arr[i + 1];
    }
    arr = condensed;
    condensed = [];
  }
  console.log(arr[0]);
}