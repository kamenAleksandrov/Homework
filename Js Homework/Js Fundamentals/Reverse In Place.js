function reverseNoTemp(arr) {
    halfArrLenght = Math.floor(arr.length / 2);
  for (let i = 0; i < halfArrLenght; i++) {
    swapElements(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(" "));

  function swapElements(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}