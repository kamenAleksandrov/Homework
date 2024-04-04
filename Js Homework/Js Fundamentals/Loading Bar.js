function loadingBar(num){
    let loadingBar = new Array(10).fill('.').fill('%', 0, num / 10);
    // let loadingBar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    // for (let i = 0; i < num / 10; i++) {
    //     loadingBar[i] = '%';
    // }
    if(num < 100){
        console.log(`${num}% [${loadingBar.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${loadingBar.join('')}]`);
    }
}
loadingBar(30); // 30% [%%%.....]
loadingBar(50); // 50% [%%%%%....]
loadingBar(100); // 100% Complete!