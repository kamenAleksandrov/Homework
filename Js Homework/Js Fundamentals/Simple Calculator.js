function simpleCalculator(n1, n2, operator) {
  let operatorArr = {
    multiply: (n1, n2) => n1 * n2,
    divide: (n1, n2) => n1 / n2,
    add: (n1, n2) => n1 + n2,
    subtract: (n1, n2) => n1 - n2,
  };

  return(operatorArr[operator](n1, n2));
}

// function simpleCalculator(n1, n2, operator) {
//   const operators = {
//     multiply: (x, y) => x * y,
//     divide: (x, y) => x / y,
//     add: (x, y) => x + y,
//     subtract: (x, y) => x - y,
//   };

//   return operators[operator](n1, n2);
// }
simpleCalculator(2, 3, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");

// function simpleCalculator(n1, n2, operator){
//     let x = n1;
//     let y = n2;
//     let op = operator;
//     let result = 0;
//     let arr = ['+', '-', '*', '/'];
//     (x, y) =>
// }
