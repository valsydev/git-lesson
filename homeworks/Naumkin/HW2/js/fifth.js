alert('Задание №5. Диапазон. ');
const numbSix = +prompt('Введите вашу цифру');
if (numbSix >= 0 && numbSix <= 500) {
  alert('Ваше число ' + numbSix + ' Прекрасный результат');
} else if (numbSix < 0) {
  alert('Ваше число ' + numbSix + '. меньше 0');
} else if (numbSix > 500) {
  alert('Ваше число ' + numbSix + '. больше 500');
}
