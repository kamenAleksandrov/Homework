function printDNA(length) {
  let dna = "ATCGTTAGGG";
  let counter = 0;
  let firstSymbolCounter = 0;
  let secondSymbolCounter = 1;
  for (let i = 0; i < length; i++) {
    if (counter == 0) {
      console.log(`**${dna[firstSymbolCounter]}${dna[secondSymbolCounter]}**`);
      counter++;
    } else if (counter == 1) {
      console.log(`*${dna[firstSymbolCounter]}--${dna[secondSymbolCounter]}*`);
      counter++;
    } else if (counter == 2) {
      console.log(`${dna[firstSymbolCounter]}----${dna[secondSymbolCounter]}`);
      counter++;
    } else {
      console.log(`*${dna[firstSymbolCounter]}--${dna[secondSymbolCounter]}*`);
      counter = 0;
    }

    firstSymbolCounter += 2;
    secondSymbolCounter += 2;
    if (firstSymbolCounter >= 9) {
        firstSymbolCounter = firstSymbolCounter % 10;
    }
    if (secondSymbolCounter >= 9) {
        secondSymbolCounter = secondSymbolCounter % 10;
    }
  }
}
printDNA(10);
// better version generated by copilot
// function printDNA(length){
//     let dna = 'ATCGTTAGGG';
//     let count = 0;
//     for (let i = 0; i < length; i++) {
//         let first = dna[count % 10];
//         let second = dna[(count + 1) % 10];
//         if (i % 4 === 0) {
//             console.log(`**${first}${second}**`);
//         } else if (i % 4 === 1 || i % 4 === 3) {
//             console.log(`*${first}--${second}*`);
//         } else {
//             console.log(`${first}----${second}`);
//         }
//         count += 2;
//     }
// }
// Test cases
// printDNA(10);
printDNA(4);