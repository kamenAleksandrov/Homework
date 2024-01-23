let currentLevelXp = 0;
let totalXpMaxLevel = 0;
let totaljumps = 0;
let xpPerJump = 0.75;
let jumpAnimationTime = 1;

for (i = 0; i < 100; i++) {
  currentLevelXp = Math.pow(i + 1, 1.5) / 2 + 0.5;
  totalXpMaxLevel += currentLevelXp;
  while (currentLevelXp >= xpPerJump) {
    currentLevelXp -= xpPerJump;
    totaljumps++;
  }
}

console.log(`Total jumps: ${totaljumps},
 Total xp: ${totalXpMaxLevel},
  Total time in hours: ${(totaljumps * jumpAnimationTime) / 3600}`);
