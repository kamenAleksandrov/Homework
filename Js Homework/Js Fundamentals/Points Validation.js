function pointsValidation(input) {
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];

  let xDistanceTo0 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
  let yDistanceTo0 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (Number.isInteger(xDistanceTo0)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(yDistanceTo0)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(distance)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

// Test the function
pointsValidation(3, 0, 0, 4); // {3, 0} to {0, 4} is valid
pointsValidation(2, 1, 1, 1); // {2, 1} to {1, 1} is invalid