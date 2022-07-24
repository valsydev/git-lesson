alert('Задание №3. Сравнение. ');
const numbFour = +prompt('Введите пожалуйста двузначную цифру');
const firstNumbFour = (numbFour + '')[0];
const secondNumbFour = (numbFour + '')[1];
if (numbFour < 10 || numbFour >= 100) {
  alert('Введите пожалуйста двузначную цифру');
} else if (firstNumbFour > secondNumbFour) {
  alert(
    'Первая цифра числа ' +
      numbFour +
      ' больше второй цифры: ' +
      firstNumbFour +
      ' > ' +
      secondNumbFour
  );
} else if (firstNumbFour < secondNumbFour) {
  alert(
    'Первая цифра числа ' +
      numbFour +
      ' меньше второй цифры: ' +
      firstNumbFour +
      ' < ' +
      secondNumbFour
  );
} else if (firstNumbFour === secondNumbFour) {
  alert(
    'Первая и вторая цифры числа ' +
      numbFour +
      ' равны между собой ' +
      firstNumbFour +
      ' = ' +
      secondNumbFour
  );
}
