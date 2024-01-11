function printChess(n){
    let result = '<div class="chessboard">\n';
    for(let i = 0; i < n; i++){
        result += '  <div>\n';
        for(let j = 0; j < n; j++){
            let color = (i + j) % 2 == 0 ? 'black' : 'white';
            result += `    <span class="${color}"></span>\n`;
        }
        result += '  </div>\n';
    }
    result += '</div>';
    return result;
}