function wallBuilding(str) {
  let wall = str.map(Number);
  // console.log(wall);
  let wallSectionsDone = 0;
  let totalSections = wall.length;
  let wallDone = false;
  let concreteUsed = [];
  let totalPrice = 0;
  while (!wallDone) {
    let concrete = 0;
    for (let i = 0; i < wall.length; i++) {
      if (wall[i] < 30) {
        wall[i] = wall[i] + 1;
        concrete++;
      } else {
        wall.splice(i, 1);
        i--;
        wallSectionsDone++;
        if (wallSectionsDone == totalSections) {
          wallDone = true;
          for (let i = 0; i < concreteUsed.length; i++) {
            totalPrice += concreteUsed[i] * 1900;
          }
          return console.log(
            concreteUsed.join(", ") + "\n" + totalPrice + " pesos"
          );
        }
      }
    }
    concreteUsed.push(concrete * 195);
  }
}

wallBuilding([17, 22, 17, 19, 17]);
