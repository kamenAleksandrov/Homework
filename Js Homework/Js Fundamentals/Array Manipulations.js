function manipulateArray (arr){
    let array = arr.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++){
        let [command, firstNum, secondNum] = arr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command){
            case 'Add':
                array.push(firstNum);
                break;
            case 'Remove':
                array = array.filter(x => x !== firstNum);
                break;
            case 'RemoveAt':
                array.splice(firstNum, 1);
                break;
            case 'Insert':
                array.splice(secondNum, 0, firstNum);
                break;
        }
    }
    console.log(array.join(' '));
}