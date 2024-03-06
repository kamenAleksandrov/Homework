function topInt(arr) {
  let topInts = [];
  for (let i = 0; i < arr.length; i++) {
    let isTop = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topInts.push(arr[i]);
    }
  }
  console.log(topInts.join(" "));
}

topInt([1, 4, 3, 2]);
