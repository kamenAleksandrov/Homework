function reverseArray(num, arr) {
  arr = arr.slice(0, num);
  arr.reverse();
  console.log(arr.join(" "));
}
