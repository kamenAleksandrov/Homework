function calculator(arr){
    // let arr = input.split(' ');
    let stack = [];
    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    for (let i = 0; i < arr.length; i++) {
        if (operators[arr[i]]) {
            if (stack.length < 2) {
                return 'Error: not enough operands!';
            }
            let b = stack.pop();
            let a = stack.pop();
            stack.push(operators[arr[i]](a, b));
        } else {
            stack.push(Number(arr[i]));
        }
    }
    if (stack.length > 1) {
        return 'Error: too many operands!';
    }
    return stack[0];
}
console.log(calculator('3 4 5 + - 2 *')); // -12