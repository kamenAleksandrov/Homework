function rotation(arr){
    let rotations = Number(arr.pop());
    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotation(['1', '2', '3', '4', '2']);