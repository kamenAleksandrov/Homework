function commonElements(arr1, arr2) {
  let matchingArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        matchingArr.push(arr1[i]);
      }
    }
  }
    return matchingArr.join("\n");
}