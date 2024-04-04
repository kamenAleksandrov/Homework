function factorialDivision(num1, num2) {
    function factorial(num) {
        let result = 1;
        return num === 0 ? 1 : num * factorial(num - 1);
        // for (let i = 1; i <= num; i++) {
        //     result *= i;
        // }
        // return result;
    }
    let result = factorial(num1) / factorial(num2);
    console.log(result.toFixed(2));
}
factorialDivision(5, 2); // 60.00
factorialDivision(6, 2); // 360.00