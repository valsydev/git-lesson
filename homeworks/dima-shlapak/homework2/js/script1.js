const number1 = +prompt('Введите целое число a');
const number2 = +prompt('Введите целое число b');

if( number1 % number2 === 0) {
    alert('Число B є дільником числа A, результат: ' + number1 / number2 );
} else if ( number2 % number1 === 0) {
    alert('Число A є дільником числа B, результат: ' + number2 / number1);
} else {
    alert('Не можна поділити!!!');
}