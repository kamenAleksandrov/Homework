function myFunction(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = n;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "));
  }
}

// function nXNMatrix (n){
//     let result = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++){
//             result += n + ' ';
//         }
//         result += '\n';
//     }
//     console.log(result);
// }
myFunction(3); // 3 3 3
