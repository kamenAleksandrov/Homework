function orderedArray(arr){
    let result = [];
    arr.sort();
    for (let i = 0; i < arr.length; i++){
        result.push(`${i + 1}.${arr[i]}`);
    }
    return result.join('\n');
}

console.log(orderedArray(["Potatoes", "Tomatoes", "Onions", "Apples"])); // 1.Potatoes