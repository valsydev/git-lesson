const firstValue = prompt('Enter first value: ');
const secondValue = prompt('Enter second value: ');
if (isNaN(firstValue) || isNaN(secondValue)) {
    alert('Обновите страницу и пиши нормально числа. Договорились ?');
}
document.write(firstValue, '=', secondValue, ' = ', firstValue === secondValue);
alert(firstValue === secondValue);
