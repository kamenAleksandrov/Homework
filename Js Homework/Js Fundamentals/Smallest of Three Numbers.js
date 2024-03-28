function smallestOfThree(n1, n2, n3){
    let smallest = Number.MAX_SAFE_INTEGER;
    let arr = [n1, n2, n3];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }
    console.log(smallest);
}

smallestOfThree(2, 5, 3);
smallestOfThree(600, 342, 123);
smallestOfThree(25, 21, 4);
smallestOfThree(23, 12, 50);