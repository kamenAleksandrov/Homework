function specialNumbers(num){
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let currentNum = i;
        while (currentNum > 0) {
            sum += currentNum % 10;
            currentNum = Math.floor(currentNum / 10);
        }
        let result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
    }
}