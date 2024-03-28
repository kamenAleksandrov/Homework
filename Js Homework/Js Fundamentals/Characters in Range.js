function myFunction(firstChar, secondChar) {
  let first = firstChar.charCodeAt(0);
  let second = secondChar.charCodeAt(0);
  let start = Math.min(first, second);
  let end = Math.max(first, second);
  let result = [];
  for (let i = start + 1; i < end; i++) {
    result.push(String.fromCharCode(i));
  }
  console.log(result.join(" "));
}

// function printAllASCIICharsInRange(firstChar, secondChar) {
//     let firstCharCode = firstChar.charCodeAt(0);
//     let secondCharCode = secondChar.charCodeAt(0);
//     let start = Math.min(firstCharCode, secondCharCode);
//     let end = Math.max(firstCharCode, secondCharCode);

//     let result = [];
//     for (let i = start + 1; i < end; i++) {
//         result.push(String.fromCharCode(i));
//     }

//     console.log(result.join(' '));
// }
printAllASCIICharsInRange("a", "d"); // b c
printAllASCIICharsInRange("#", ":"); // $ % & ' ( ) * + , - . /
printAllASCIICharsInRange("C", "#"); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A
printAllASCIICharsInRange("C", "A"); // B
printAllASCIICharsInRange("A", "C"); // B
