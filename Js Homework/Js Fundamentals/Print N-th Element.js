function step(arr) {
  let step = Number(arr.pop());
  let collection = [];
  for (let i = 0; i < arr.length; i += step) {
    collection.push(arr[i]);
  }
  console.log(collection.join(" "));
}
