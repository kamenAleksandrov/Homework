function serchForANumber(arr, commands) {
    let [take, deleteCount, searchNumber] = commands;
    let newArr = arr.slice(0, take);
    newArr.splice(0, deleteCount);
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchNumber) {
            count++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}