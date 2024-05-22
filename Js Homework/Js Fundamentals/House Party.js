function houseParty(arr) {
  let guestList = [];
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].split(" ")[0];
    if (arr[i].includes("not")) {
      if (guestList.includes(name)) {
        guestList.splice(guestList.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    }
  }
  console.log(guestList.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]); // Allie
