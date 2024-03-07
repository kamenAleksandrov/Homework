function magicMatrices(matrix) {
  let sumRow = 0;
  let colSum = 0;
  for (let row = 0; row < matrix.length; row++) {
    let currentRowSum = matrix[row].reduce((a, b) => a + b, 0);
    if (row === 0) {
      sumRow = currentRowSum;
    } else if (sumRow !== currentRowSum) {
      console.log(false);
      return;
    }
  }
  for (let col = 0; col < matrix[0].length; col++) {
    let currentColSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      currentColSum += matrix[row][col];
    }
    if (col === 0) {
      colSum = currentColSum;
    } else if (colSum !== currentColSum) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

// function magicMatrices(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let rowSum = matrix[i].reduce((a, b) => a + b, 0);
//     let colSum = matrix.map((x) => x[i]).reduce((a, b) => a + b, 0);
//     if (rowSum !== colSum) {
//       console.log(false);
//       return;
//     }

//     console.log(true);
//   }
// }

// function magicMatrices(matrix){
//     let sumRow = 0;
//     let sumCol = 0;
//     let isMagic = true;
//     for (let row = 0; row < matrix.length; row++) {
//         let currentRow = matrix[row];
//         let currentSumRow = currentRow.reduce((a, b) => a + b, 0);
//         if (row === 0) {
//             sumRow = currentSumRow;
//         } else if (sumRow !== currentSumRow) {
//             isMagic = false;
//             break;
//         }
//     }
//     for (let col = 0; col < matrix[0].length; col++) {
//         let currentSumCol = 0;
//         for (let row = 0; row < matrix.length; row++) {
//             currentSumCol += matrix[row][col];
//         }
//         if (col === 0) {
//             sumCol = currentSumCol;
//         } else if (sumCol !== currentSumCol) {
//             isMagic = false;
//             break;
//         }
//     }
//     console.log(isMagic);
// }
