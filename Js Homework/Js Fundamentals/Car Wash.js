function carWash(commands) {
  let percentage = 0;
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "soap":
        percentage += 10;
        break;
      case "water":
        percentage += percentage * 0.2;
        break;
      case "vacuum cleaner":
        percentage += percentage * 0.25;
        break;
      case "mud":
        percentage -= percentage * 0.1;
        break;
    }
  }
    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]); // The car is 65% clean.
