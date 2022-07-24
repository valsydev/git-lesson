alert('Задание №1. Кратные числа и делитель.');
const numbOne = +prompt('Введите вашу первую цифру');
const numbTwo = +prompt('Введите вашу вторую цифру');

if (numbOne === 0 || numbTwo === 0) {
  alert('Внимание! Цифра 0 не является не кратным числом и не делителем!');
} else if (numbOne % numbTwo === 0) {
  alert('Цифра ' + numbTwo + ' является делителем числа ' + numbOne);
} else if (numbOne % numbTwo !== 0) {
  alert('Цифра ' + numbTwo + ' не является делителем числа ' + numbOne);
}

if (numbOne === 0 || numbTwo === 0) {
  alert('Внимание! Цифра 0 не является не кратным числом и не делителем!');
} else if (numbTwo % numbOne === 0) {
  alert('Цифра ' + numbOne + ' является делителем числа ' + numbTwo);
} else if (numbTwo % numbOne !== 0) {
  alert('Цифра ' + numbOne + ' не является делителем числа ' + numbTwo);
}
