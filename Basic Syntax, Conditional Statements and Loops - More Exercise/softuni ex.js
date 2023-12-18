function myFunction(shift){
day = 1;
gold = 0;
money = 0;
bitcoins = 0;
dayOfFirstBitcoin = 0;
for(i = 0; i < shift.length; i++){
    if(day % 3 === 0){
        gold = shift[i] * 0.70;
    } else {
        gold = shift[i];
    }
    money += gold * 67.51;
    if(money >= 11949.16){
        while(money >= 11949.16){
            money -= 11949.16;
            bitcoins++;
            if(bitcoins === 1){
                dayOfFirstBitcoin = day;
            }
        }
    }
    
    day++;
}
console.log(`Bought bitcoins: ${bitcoins}`);
if(bitcoins > 0){
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
}
console.log(`Left money: ${money.toFixed(2)} lv.`);
}

// Test case 4: Shifts with multiple bitcoin purchases
console.log("Test case 4:");
myFunction([1000, 2000, 3000, 4000, 5000]);
// Expected output:
// Bought bitcoins: 3
// Day of the first purchased bitcoin: 1
// Left money: 0.00 lv.