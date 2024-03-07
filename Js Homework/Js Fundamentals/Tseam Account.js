function tseamAccount(input) {
  let accountGames = input.shift().split(" ");
  let commands = input.splice(0, input.length);
  while (commands[0] != "Play!") {
    let [command, game] = commands.shift().split(" ");
    switch (command) {
      case "Install":
        if (!accountGames.includes(game)) {
          accountGames.push(game);
        }
        break;
      case "Uninstall":
        if (accountGames.includes(game)) {
          accountGames.splice(accountGames.indexOf(game), 1);
        }
        break;
      case "Update":
        if (accountGames.includes(game)) {
          accountGames.splice(accountGames.indexOf(game), 1);
          accountGames.push(game);
        }
        break;
      case "Expansion":
        let [gameName, expansion] = game.split("-");
        if (accountGames.includes(gameName)) {
          accountGames.splice(
            accountGames.indexOf(gameName) + 1,
            0,
            `${gameName}:${expansion}`
          );
        }
        break;
    }
  }
  console.log(accountGames.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
