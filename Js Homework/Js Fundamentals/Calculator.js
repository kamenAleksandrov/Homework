function calculator(number, operator, number2) {
  switch (operator) {
    case "+":
      console.log((number + number2).toFixed(2));
      break;
    case "-":
      console.log((number - number2).toFixed(2));
      break;
    case "*":
      console.log((number * number2).toFixed(2));
      break;
    case "/":
      console.log((number / number2).toFixed(2));
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}
