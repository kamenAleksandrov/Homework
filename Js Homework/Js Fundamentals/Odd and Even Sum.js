function sumAllOddAndEveNumbersTogether(num){
let evenSum = 0;
let oddSum = 0;
let numArr = num.toString().split("").map(Number);
for (let i = 0; i < numArr.length; i++){
    if (numArr[i] % 2 === 0){
        evenSum += numArr[i];
    } else {
        oddSum += numArr[i];
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}