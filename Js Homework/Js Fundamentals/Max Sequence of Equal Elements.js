function maxSequence(arr) {
  let currentSequenceLength = 0;
  let currentSequenceNum = 0;

  let longestSequenceLength = 0;
  let longestSequenceNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentSequenceLength++;
      currentSequenceNum = arr[i];
    } else {
      if (currentSequenceLength > longestSequenceLength) {
        longestSequenceLength = currentSequenceLength;
        longestSequenceNum = currentSequenceNum;
      }
      currentSequenceLength = 0;
    }
  }

    let result = [];
    for (let i = 0; i <= longestSequenceLength; i++) {
        result.push(longestSequenceNum);
    }
    console.log(result.join(" "));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);