function sort(a,b,c){
    let arr = [a,b,c];
    arr.sort(sortDESC);
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    function sortDESC(a,b){
        return b-a;
    }
}

