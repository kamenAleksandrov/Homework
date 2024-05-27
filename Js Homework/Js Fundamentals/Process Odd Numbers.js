function oddNums(arr){
    let result = [];
    for (let i = 1; i < arr.length; i+=2){
        if (i % 2 !== 0){
            result.push(arr[i] * 2);
        }
    }
    return result.reverse().join(' ');
}

console.log(oddNums([10, 15, 20, 25])); // 50 30