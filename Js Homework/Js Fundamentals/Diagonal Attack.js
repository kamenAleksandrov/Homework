function diagonal(input) {
  let matrix = input.map((row) => row.split(" ").map(Number));
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrix.length - 1 - i];
  }
  if (firstDiagonal === secondDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && j !== matrix.length - 1 - i) {
          matrix[i][j] = firstDiagonal;
        }
      }
    }
  }
  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}

diagonal([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
diagonal(["1 1 1", "1 1 1", "1 1 0"]);

// function diagonal(input) {
//     let matrix = input.map(row => row.split(' ').map(Number));
//     let firstDiagonal = 0;
//     let secondDiagonal = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         firstDiagonal += matrix[i][i];
//         secondDiagonal += matrix[i][matrix.length - 1 - i];
//     }
//     if (firstDiagonal === secondDiagonal) {
//         for (let i = 0; i < matrix.length; i++) {
//             for (let j = 0; j < matrix.length; j++) {
//                 if (i !== j && j !== matrix.length - 1 - i) {
//                     matrix[i][j] = firstDiagonal;
//                 }
//             }
//         }
//     }
//     matrix.forEach(row => console.log(row.join(' ')));
// }
