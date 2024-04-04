function radioCrystals(input) {
  let desiredThickness = input[0];
  input.shift();
  let transportAndWashCounter = 0;

  for (let i = 0; i < input.length; i++) {
    let crystal = input[i];
    let xRay = false;
    transportAndWashCounter = 0;

    while (crystal > desiredThickness) {
      crystal = processCrystal(crystal);
      if (crystal == desiredThickness - 1 && !xRay) {
        crystal = xray(crystal);
        xRay = true;
        Math.floor(crystal);
        transportAndWashCounter++;
      }
    }
    console.log(crystal);
  }
  function processCrystal(crystal) {
    if (crystal / 4 >= desiredThickness) {
      crystal = cut(crystal);
      Math.floor(crystal);
      transportAndWashCounter++;
    } else if (crystal - crystal * 0.2 >= desiredThickness) {
      crystal = lap(crystal);
      Math.floor(crystal);
      transportAndWashCounter++;
    } else if (crystal - 20 >= desiredThickness) {
      crystal = grind(crystal);
      Math.floor(crystal);
      transportAndWashCounter++;
    } else if (
      crystal - 2 >= desiredThickness ||
      crystal - 2 >= desiredThickness - 1
    ) {
      crystal = etch(crystal);
      Math.floor(crystal);
      transportAndWashCounter++;
    }
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
