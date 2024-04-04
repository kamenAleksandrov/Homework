function radioCrystals(input) {
  let desiredThickness = input[0];
  input.shift();

  for (let i = 0; i < input.length; i++) {
    let crystal = input[i];
    let xRay = false;
    console.log(`Processing chunk ${crystal} microns`);

    while (crystal > desiredThickness) {
      crystal = processCrystal(crystal);
      if (crystal == desiredThickness - 1 && !xRay) {
        crystal = xray(crystal);
        xRay = true;
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${crystal} microns`);
  }
  function processCrystal(crystal) {
    let taskCounter = 0;
    if (
      crystal / 4 >= desiredThickness ||
      crystal / 4 >= desiredThickness - 1
    ) {
      while (
        crystal / 4 >= desiredThickness ||
        crystal / 4 >= desiredThickness - 1
      ) {
        crystal = cut(crystal);
        taskCounter++;
      }
      console.log(`Cut x${taskCounter}`);
    } else if (
      crystal - crystal * 0.2 >= desiredThickness ||
      crystal * 0.2 >= desiredThickness - 1
    ) {
      while (
        crystal - crystal * 0.2 >= desiredThickness ||
        crystal * 0.2 >= desiredThickness - 1
      ) {
        crystal = lap(crystal);
        taskCounter++;
      }
      console.log(`Lap x${taskCounter}`);
    } else if (
      crystal - 20 >= desiredThickness ||
      crystal - 20 >= desiredThickness - 1
    ) {
      while (
        crystal - 20 >= desiredThickness ||
        crystal - 20 >= desiredThickness - 1
      ) {
        crystal = grind(crystal);
        taskCounter++;
      }
      console.log(`Grind x${taskCounter}`);
    } else if (
      crystal - 2 >= desiredThickness ||
      crystal - 2 >= desiredThickness - 1
    ) {
      while (
        crystal - 2 >= desiredThickness ||
        crystal - 2 >= desiredThickness - 1
      ) {
        crystal = etch(crystal);
        taskCounter++;
      }
      console.log(`Etch x${taskCounter}`);
    }
    crystal = Math.trunc(crystal);
    console.log("Transporting and washing");
    return crystal;
  }
  function cut(crystal) {
    return crystal / 4;
  }
  function lap(crystal) {
    return crystal - crystal * 0.2;
  }
  function grind(crystal) {
    return crystal - 20;
  }
  function etch(crystal) {
    return crystal - 2;
  }
  function xray(crystal) {
    return crystal + 1;
  }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 400, 8100]);

// function radioCrystals(input) {
//   let desiredThickness = input[0];
//   let crystals = input.slice(1); // copy the array

//   crystals.forEach(crystal => {
//     let xRay = false;
//     console.log(`Processing chunk ${crystal} microns`);

//     while (crystal > desiredThickness) {
//       crystal = processCrystal(crystal, desiredThickness);
//       if (crystal == desiredThickness - 1 && !xRay) {
//         crystal = xray(crystal);
//         xRay = true;
//         console.log(`X-ray x1`);
//       }
//     }
//     console.log(`Finished crystal ${crystal} microns`);
//   });
// }

// function processCrystal(crystal, desiredThickness) {
//   if (crystal / 4 >= desiredThickness) {
//     return performOperation(crystal, cut, "Cut", desiredThickness);
//   } else if (crystal - crystal * 0.2 >= desiredThickness) {
//     return performOperation(crystal, lap, "Lap", desiredThickness);
//   } else if (crystal - 20 >= desiredThickness) {
//     return performOperation(crystal, grind, "Grind", desiredThickness);
//   } else if (crystal - 2 >= desiredThickness || crystal - 2 >= desiredThickness - 1) {
//     return performOperation(crystal, etch, "Etch", desiredThickness);
//   }
//   crystal = Math.trunc(crystal);
//   console.log("Transporting and washing");
//   return crystal;
// }
// good idea to call functions
// function performOperation(crystal, operation, operationName, desiredThickness) {
//   let taskCounter = 0;
//   while (operation(crystal) >= desiredThickness) {
//     crystal = operation(crystal);
//     taskCounter++;
//   }
//   console.log(`${operationName} x${taskCounter}`);
//   return crystal;
// }

// function cut(crystal) {
//   return crystal / 4;
// }

// function lap(crystal) {
//   return crystal - crystal * 0.2;
// }

// function grind(crystal) {
//   return crystal - 20;
// }

// function etch(crystal) {
//   return crystal - 2;
// }

// function xray(crystal) {
//   return crystal + 1;
// }

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 400, 8100]);
