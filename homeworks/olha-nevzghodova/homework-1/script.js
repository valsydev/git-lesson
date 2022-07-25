const firstNumber = +prompt('Enter a number', '');
const operator = prompt('Enter an operator', '');
const secondNumber = +prompt ('Enter a second number', '');

let result = 0;
if (operator === '+') {
    result = firstNumber + secondNumber;
} else if (operator === '-') {
    result = firstNumber - secondNumber;
} else if (operator === '/') {
    result = firstNumber / secondNumber;
} else if (operator === '*') {
    result = firstNumber * secondNumber;
}

alert(firstNumber + operator + secondNumber + '=' +result);