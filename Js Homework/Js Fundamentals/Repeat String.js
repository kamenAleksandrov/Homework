function repeatString(string, repeat){
    // let result = string.repeat(repeat); works!!!
    let result  = '';
    for(let i = 0; i < repeat; i++){
        result += string;
    }
    console.log(result);
}
repeatString('abc', 3);