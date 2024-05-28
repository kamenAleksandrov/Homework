// function findPairs(arr) {
//   let pairs = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === arr[i][j + 1]) {
//         pairs++;
//       }
//       if (arr[i + 1] && arr[i][j] === arr[i + 1][j]) {
//         pairs++;
//       }
//     }
//   }
//   console.log(pairs);
// }

function findPairs(arr) {
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === arr[i][j + 1]) {
            pairs++;
        }
        if (arr[i + 1] && arr[i][j] === arr[i + 1][j]) {
            pairs++;
        }
    }
  }
  return pairs;
}

findPairs([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]); // 1
findPairs([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]); // 2
