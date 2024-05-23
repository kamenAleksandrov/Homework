function gladiatorInventory(actions) {
  let inventory = actions.shift().split(" ");
  //   console.log(inventory);
  for (let i = 0; i < actions.length; i++) {
    let commands = actions[i].split(" ");
    switch (commands[0]) {
      case "Buy":
        buy(inventory, commands[1]);
        break;
      case "Trash":
        trash(inventory, commands[1]);
        break;
      case "Repair":
        repair(inventory, commands[1]);
        break;
      case "Upgrade":
        upgrade(inventory, commands[1]);
        break;
    }
  }
  console.log(inventory.join(" "));

  function buy(inventory, equipment) {
    if (inventory.includes(equipment)) {
      return;
    } else {
      inventory.push(equipment);
    }
  }

  function trash(inventory, equipment) {
    if (inventory.includes(equipment)) {
      inventory.splice(inventory.indexOf(equipment), 1);
    } else {
      return;
    }
  }

  function repair(inventory, equipment) {
    if (inventory.includes(equipment)) {
      inventory.splice(inventory.indexOf(equipment), 1);
      inventory.push(equipment);
    } else {
      return;
    }
  }

  function upgrade(inventory, equipment) {
    let item = equipment.split("-");
    if (inventory.includes(item[0])) {
      inventory.splice(
        inventory.indexOf(item[0]) + 1,
        0,
        item[0] + `:` + item[1]
      );
    } else {
      return;
    }
  }
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
