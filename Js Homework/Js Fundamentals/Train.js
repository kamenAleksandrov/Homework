function trainWagons(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command.length === 2) {
      wagons.push(Number(command[1]));
    } else {
      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + Number(command[0]) <= maxCapacity) {
          wagons[j] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
trainWagons(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
