function addOrRemove(arr) {
  let number = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      result.push(number);
    } else {
      result.pop();
    }
    number++;
  }
  console.log(result.length === 0 ? "Empty" : result.join(" "));
}

addOrRemove(["add", "add", "remove", "add", "add"]);
