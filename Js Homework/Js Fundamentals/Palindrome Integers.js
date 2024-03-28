function checkIfNumIsPalindrome(num) {
  let numArr = num.toString().split("").map(Number);
  let reversedNumArr = numArr.slice().reverse();
  let isPalindrome = true;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== reversedNumArr[i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}
