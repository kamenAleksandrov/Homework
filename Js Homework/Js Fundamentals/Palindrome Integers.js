function checkPalindromeIntegers(input) {
  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];
    let reversedNum = Number(
      currentNum.toString().split("").reverse().join("")
    );
    console.log(currentNum === reversedNum);
  }
}

checkPalindromeIntegers([123, 323, 421, 121]); // false, true, false, true
checkPalindromeIntegers([32, 2, 232, 1010]); // false, true, true, true
