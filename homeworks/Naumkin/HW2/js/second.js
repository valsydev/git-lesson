alert('Задание №2. Четное и нечетное. ');
const numbThree = +prompt('Введите вашу цифру');

if (numbThree <= 0) {
  alert('Внимание! Введите пожалуйста цифру больше 0');
} else if (numbThree % 2 === 0) {
  alert(
    'Введенная вами цифра ' +
      numbThree +
      ' является четной.' +
      ' Она заканчивается на ' +
      (numbThree % 10)
  );
} else if (numbThree % 2 !== 0) {
  alert(
    'Введенная вами цифра ' +
      numbThree +
      ' не является четной.' +
      ' Она заканчивается на ' +
      (numbThree % 10)
  );
}
