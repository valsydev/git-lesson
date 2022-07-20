const firstNumber = parseInt(prompt('Enter first number: '));
const secondNumber = parseInt(prompt('Enter second number: '));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (0 === firstNumber || 0 === secondNumber) {
    alert('Ошибка! в математике нельзя делить на число 0')
} else {
    let firstResult = firstNumber % secondNumber;
    let secondResult = secondNumber % firstNumber;
    let messageResult = '';
    if (firstResult === 0) {
        messageResult = firstResult + ` = число ${secondNumber} является делителем числа ${firstNumber}\n`;
    } else {
        messageResult = firstResult + ' = остаток от деления.' + ` Число ${secondNumber} не является делителем числа ${firstNumber}\n`;
    }
    if (secondResult === 0) {
        messageResult += secondResult + ` = число ${firstNumber} является делителем числа ${secondNumber}`;
    } else {
        messageResult += secondResult + ' = остаток от деления.' + ` Число ${firstNumber} не является делителем числа ${secondNumber}`;
    }
    alert(messageResult);
}
