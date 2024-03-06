function ladybugs(arr) {
  let fieldSize = arr.shift();
  let field = arr.shift().split(" ").map(Number);
  let directions = arr.slice(",");

  while (field.length < fieldSize) {
    arr.push(0);
  }

  for (let i = 0; i < directions.length; i++) {
    let [index, direction, flyLength] = directions[i].split(" ");
    index = Number(index);
    flyLength = Number(flyLength);
    
  }

  function move(index , direction, flyLength){
    if (field[index] === 1){
        if (direction === "right") {
            index += flyLength;
          } else {
            index -= flyLength;
          }
    }

  }
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
// 3, [ 0, 1 ], [ '0 right 1', '2 right 1' ]

// console.log(fieldSize);
// console.log(field);
// console.log(directions);

//function ladybugs(arr){
//     let fieldSize = arr[0];
//     let field = new Array(fieldSize).fill(0);
//     let bugs = arr[1].split(' ').map(Number);
//     for (let i = 0; i < fieldSize; i++) {
//         if (bugs.includes(i)) {
//             field[i] = 1;
//         }
//     }
//     let directions = arr.slice(2);
//     for (let i = 0; i < directions.length; i++) {
//         let [bugIndex, direction, length] = directions[i].split(' ');
//         bugIndex = Number(bugIndex);
//         length = Number(length);
//         if (field[bugIndex] === 1) {
//             field[bugIndex] = 0;
//             if (direction === 'right') {
//                 bugIndex += length;
//                 while (field[bugIndex] === 1) {
//                     bugIndex += length;
//                 }
//                 if (bugIndex < fieldSize) {
//                     field[bugIndex] = 1;
//                 }
//             } else {
//                 bugIndex -= length;
//                 while (field[bugIndex] === 1) {
//                     bugIndex -= length;
//                 }
//                 if (bugIndex >= 0) {
//                     field[bugIndex] = 1;
//                 }
//             }
//         }
//     }
//     console.log(field.join(' '));

// }
