function sortingArray(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    while (arr.length > 0) {
        result.push(arr.pop());
        result.push(arr.shift());
    }
    console.log(result.join(" "))
}
sortingArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);