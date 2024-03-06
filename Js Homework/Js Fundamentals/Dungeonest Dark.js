function dungeonestDark(roomsArr) {
  let separatedRoms = roomsArr[0].split("|");
  let health = 100;
  let coins = 0;

  for (let i = 0; i < separatedRoms.length; i++) {
    let [effect, value] = separatedRoms[i].split(" ");
    value = Number(value);
    if (effect === "potion") {
      if (health + value > 100) {
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
        console.log(`Current health: ${health} hp.`);
      } else {
        health += value;
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (effect === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      if (health - value > 0) {
        health -= value;
        console.log(`You slayed ${effect}.`);
      } else {
        console.log(`You died! Killed by ${effect}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

// function dungeonestDark(input) {
//     let health = 100;
//     let coins = 0;
//     let rooms = input[0].split('|');
//     let isDead = false;
//     for (let i = 0; i < rooms.length; i++) {
//         let [command, value] = rooms[i].split(' ');
//         value = Number(value);
//         if (command === 'potion') {
//             if (health + value > 100) {
//                 value = 100 - health;
//                 health = 100;
//             } else {
//                 health += value;
//             }
//             console.log(`You healed for ${value} hp.`);
//             console.log(`Current health: ${health} hp.`);
//         } else if (command === 'chest') {
//             coins += value;
//             console.log(`You found ${value} coins.`);
//         } else {
//             health -= value;
//             if (health > 0) {
//                 console.log(`You slayed ${command}.`);
//             } else {
//                 console.log(`You died! Killed by ${command}.`);
//                 console.log(`Best room: ${i + 1}`);
//                 isDead = true;
//                 break;
//             }
//         }
//     }
//     if (!isDead) {
//         console.log(`You've made it!`);
//         console.log(`Coins: ${coins}`);
//         console.log(`Health: ${health}`);
//     }
// }
