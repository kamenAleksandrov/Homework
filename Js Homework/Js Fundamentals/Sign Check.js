function signCheck(n1, n2, n3){
    let arr = [n1, n2, n3];
    let negative = 0;
    let positive = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negative++;
        } else {
            positive++;
        }
    }
    if (negative % 2 === 0){
        return "Positive";
    } else {
        return "Negative";
    }
}