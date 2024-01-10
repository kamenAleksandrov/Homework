function myFunction(input) {
  type = typeof input;
  console.log(type);
  if (type == "string" || type == "number") {
    console.log(input);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

myFunction("Hello");
myFunction(15);
myFunction(true);
