function orbit(w, h, x, y) {
  let matrix = [];
  for (let i = 0; i < w; i++) {
    matrix.push([]);
  }
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
    }
  }
  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}
orbit(4, 4, 0, 0);

// function orbit(rows, cols, x, y) {
//     let matrix = [];
//     for (let i = 0; i < rows; i++) {
//         matrix.push([]);
//     }
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
//         }
//     }
//     matrix.forEach(row => console.log(row.join(' ')));
// }

// orbit(4, 4, 0, 0);
