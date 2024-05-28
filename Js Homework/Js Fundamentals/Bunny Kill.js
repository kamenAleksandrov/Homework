// function bunnyKill(matrix) {
//   let bombsIndexes = matrix.pop().split(" ");
//   let hangar = matrix.map((row) => row.split(" ").map(Number));
//   let damage = 0;
//   let kills = 0;
//   for (let bomb of bombsIndexes) {
//     let [row, col] = bomb.split(",").map(Number);
//     let bombDamage = hangar[row][col];
//     if (bombDamage > 0) {
//       kills++;
//       damage += bombDamage;
//       for (let i = row - 1; i <= row + 1; i++) {
//         for (let j = col - 1; j <= col + 1; j++) {
//           if (i >= 0 && i < hangar.length && j >= 0 && j < hangar[i].length) {
//             hangar[i][j] -= bombDamage;
//           }
//         }
//       }
//     }
//   }
//     for (let row of hangar) {
//         for (let cell of row) {
//         if (cell > 0) {
//             damage += cell;
//             kills++;
//         }
//         }
//     }
//     console.log(damage);
//     console.log(kills);
// }

function bunnyKill(matrix) {
      let bombsIndexes = matrix.pop().split(" ");
      let hangar = matrix.map((row) => row.split(" ").map(Number));
      let damage = 0;
      let kills = 0;
    //   console.log(hangar);
    //   console.log(bombsIndexes);
    for (let i = 0; i < bombsIndexes.length; i++) {
        let bomb
    }
}

bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]); // 70, 7