const firstNumber = parseFloat(prompt('Enter first number: '));
const secondNumber = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator (+, -, *, /)');
let result = 0;
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else {
    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    }
}
document.write(firstNumber + operator + secondNumber + ' = ' + result);
alert(firstNumber + operator + secondNumber + ' = ' + result);
