function bombNums(arr, explosion) {
    let bomb = explosion[0];
    let power = explosion[1];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bomb) {
            let start = i - power;
            let end = i + power;
            if (start < 0) {
                start = 0;
            }
            if (end > arr.length - 1) {
                end = arr.length - 1;
            }
            arr.splice(start, end - start + 1);
            i = 0;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
bombNums([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]); // 12