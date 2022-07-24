alert('Задание №4. Четность, кратность и сравнение. ');
const numbFive = +prompt('Введите пожалуйста трёхзначную цифру');
const firstNumbFive = (numbFive + '')[0];
const secondNumbFive = (numbFive + '')[1];
const thirdNumbFive = (numbFive + '')[2];
const summ = +firstNumbFive + +secondNumbFive + +thirdNumbFive;

if (numbFive < 100 || numbFive >= 1000) {
  alert('Введите пожалуйста трёхзначную цифру');
} else if (summ % 2 === 0) {
  alert('Сумма цифр ' + numbFive + ' является четной: ' + summ);
} else if (summ % 2 !== 0) {
  alert('Сумма цифр ' + numbFive + ' является нечетной: ' + summ);
}

if (numbFive < 100 || numbFive >= 1000) {
  alert('Введите пожалуйста трёхзначную цифру');
} else if (summ % 5 === 0) {
  alert('Сумма цифр ' + numbFive + ' является кратным 5: ' + summ);
} else if (summ % 5 !== 0) {
  alert('Сумма цифр ' + numbFive + ' не является кратным 5: ' + summ);
}

if (numbFive < 100 || numbFive >= 1000) {
  alert('Введите пожалуйста трёхзначную цифру');
} else if (summ > 100) {
  alert('Сумма цифр ' + numbFive + ' больше ста: ' + summ + ' > 100');
} else if (summ < 100) {
  alert('Сумма цифр ' + numbFive + ' меньше ста: ' + summ + ' < 100');
}
