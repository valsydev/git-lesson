alert('Задание №6. Какой сейчас год? ');
const numbSeven = +prompt(
  'Введите количество дней в году, чтобы понять какой сейчас год.'
);
if (numbSeven < 365 || numbSeven > 366) {
  alert('Вы ввели неверное количество дней.');
} else if (numbSeven === 366) {
  alert('Сейчас високосный год, в котором 366 дней.');
} else if (numbSeven % 4 !== 0) {
  alert('Сейчас обычный год, в котором 365 дней.');
} else if (numbSeven % 100 === 0 && numbSeven % 400 !== 0) {
  alert('Сейчас обычный год, в котором 365 дней.');
}