function airPollution(matrix, arrPollutants) {
  let pollutants = arrPollutants.map((x) => x.split(" "));
  let city = matrix.map((row) => row.split(" ").map(Number));
  for (let i = 0; i < pollutants.length; i++) {
    switch (pollutants[i][0]) {
      case "breeze":
        let row = pollutants[i][1];
        for (let i = 0; i < city[row].length; i++) {
          city[row][i] -= 15;
          if (city[row][i] < 0) {
            city[row][i] = 0;
          }
        }
        break;
      case "gale":
        let col = pollutants[i][1];
        for (let i = 0; i < city.length; i++) {
          city[i][col] -= 20;
          if (city[i][col] < 0) {
            city[i][col] = 0;
          }
        }
        break;
      case "smog":
        let value = Number(pollutants[i][1]);
        for (let i = 0; i < city.length; i++) {
          for (let j = 0; j < city[i].length; j++) {
            city[i][j] += value;
          }
        }
        break;
    }
  }
  let pollutedAreas = [];
  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city[i].length; j++) {
      if (city[i][j] >= 50) {
        pollutedAreas.push(`[${i}-${j}]`);
      }
    }
  }
  if (pollutedAreas.length > 0) {
    console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
// Polluted areas: [0-2], [1-2], [1-3], [2-2], [2-3], [3-2], [3-3], [4-2], [4-3]
