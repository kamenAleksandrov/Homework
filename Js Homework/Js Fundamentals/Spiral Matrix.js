function spiralMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = rows - 1;
  let startCol = 0;
  let endCol = cols - 1;

  while (startRow <= endRow || startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol++;
  }
  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}

// function spiralMatrix(rows, cols) {
//     let matrix = [];
//     for (let i = 0; i < rows; i++) {
//         matrix.push([]);
//     }

//     let counter = 1;
//     let startRow = 0;
//     let endRow = rows - 1;
//     let startCol = 0;
//     let endCol = cols - 1;

//     while (startRow <= endRow || startCol <= endCol) {
//         for (let i = startCol; i <= endCol; i++) {
//             matrix[startRow][i] = counter++;
//         }
//         startRow++;

//         for (let i = startRow; i <= endRow; i++) {
//             matrix[i][endCol] = counter++;
//         }
//         endCol--;

//         for (let i = endCol; i >= startCol; i--) {
//             matrix[endRow][i] = counter++;
//         }
//         endRow--;

//         for (let i = endRow; i >= startRow; i--) {
//             matrix[i][startCol] = counter++;
//         }
//         startCol++;
//     }

//     console.log(matrix.map(row => row.join(' ')).join('\n'));
// }

spiralMatrix(5, 5);
