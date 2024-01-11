function losses(losses, helmet, sword, shield, armor) {
    let expences = 0;
    let brokenShield = 0;
    for (let i = 1; i <= losses; i++){
        if (i % 2 === 0 && i % 3 === 0) {
            expences += helmet + sword + shield;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                expences += armor;
            }
        }else if (i % 3 === 0) {
            expences += sword;
        }else if (i % 2 === 0) {
            expences += helmet;
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}

losses(7, 2, 3, 4, 5);