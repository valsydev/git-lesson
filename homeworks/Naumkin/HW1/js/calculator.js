let numb1 = prompt('Введите вашу цифру');
let oper = prompt('Введите действие');
let numb2 = prompt('Введите вашу цифру');
if (oper === '+') {
  alert('Результат = ' + (+numb1 + +numb2));
} else if (oper === '-') {
  alert('Результат = ' + (+numb1 - +numb2));
} else if (oper === '*') {
  alert('Результат = ' + +numb1 * +numb2);
} else if (oper === '/') {
  alert('Результат = ' + +numb1 / +numb2);
}
