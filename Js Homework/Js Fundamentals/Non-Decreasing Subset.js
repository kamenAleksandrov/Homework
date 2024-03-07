function biggerFish(arr){
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            result.push(biggest);
        }
    }
    console.log(result.join(' '));
}