let number, firstNumber, secondNumber;
number = +prompt('Введите двузначное число', '') || number < 10 || number > 99;
secondNumber = number % 10;
firstNumber = Math.floor(number/ 10);
 
if (firstNumber < secondNumber) {
    alert('Первая цифра меньше второй');

} else if (firstNumber > secondNumber) {
     alert('Вторая цифра меньше первой');
}
   