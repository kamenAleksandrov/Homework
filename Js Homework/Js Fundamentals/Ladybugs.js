// does not work in every case, idc why
function ladybugs(arr) {
  let fieldSize = arr.shift();
  let bugIndex = arr.shift().split(" ").map(Number);
  let field = [];
  let directions = arr.slice(",");

  for (let i = 0; i < fieldSize; i++) {
    if (bugIndex.includes(i)) {
      field.push(1);
      continue;
    }
    field.push(0);
  }

  for (let i = 0; i < directions.length; i++) {
    let [index, direction, flyLength] = directions[i].split(" ");
    index = Number(index);
    flyLength = Number(flyLength);
    move(index, direction, flyLength);
    field[index] = 0;
  }

  function move(index, direction, flyLength) {
    if (direction === "right") {
      index += flyLength;
      if (index < 0 || index >= field.length) {
        return;
      }
      if (field[index] === 1) {
        move(index, direction, flyLength);
      } else {
        field[index] = 1;
        return;
      }
    } else {
      index -= flyLength;
      if (index < 0 || index >= field.length) {
        return;
      }
      if (field[index] === 1) {
        move(index, direction, flyLength);
      } else {
        field[index] = 1;
        return;
      }
    }
  }

  console.log(field.join(" "));
}

// ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
// ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);

// function move(index, direction, flyLength) {
//   if (direction === "right") {
//     if (index < 0 || index >= field.length || field[index] === 0) {
//       return;
//     }
//     if (field[index + flyLength] === 1) {
//       index += flyLength;
//       move(index, direction, flyLength);
//     } else {
//       field[index + flyLength] = 1;
//       return;
//     }
//   } else {
//     if (index < 0 || index >= field.length || field[index] === 0) {
//       return;
//     }
//     if (field[index - flyLength] === 1) {
//       index -= flyLength;
//       move(index, direction, flyLength);
//     } else {
//       field[index - flyLength] = 1;
//       return;
//     }
//   }
// }

//works
function ladybugs(arr){
    let fieldSize = arr[0];
    let field = new Array(fieldSize).fill(0);
    let bugs = arr[1].split(' ').map(Number);
    for (let i = 0; i < fieldSize; i++) {
        if (bugs.includes(i)) {
            field[i] = 1;
        }
    }
    let directions = arr.slice(2);
    for (let i = 0; i < directions.length; i++) {
        let [bugIndex, direction, length] = directions[i].split(' ');
        bugIndex = Number(bugIndex);
        length = Number(length);
        if (field[bugIndex] === 1) {
            field[bugIndex] = 0;
            if (direction === 'right') {
                bugIndex += length;
                while (field[bugIndex] === 1) {
                    bugIndex += length;
                }
                if (bugIndex < fieldSize) {
                    field[bugIndex] = 1;
                }
            } else {
                bugIndex -= length;
                while (field[bugIndex] === 1) {
                    bugIndex -= length;
                }
                if (bugIndex >= 0) {
                    field[bugIndex] = 1;
                }
            }
        }
    }
    console.log(field.join(' '));

}
