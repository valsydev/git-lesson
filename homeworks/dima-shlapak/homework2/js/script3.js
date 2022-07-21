const num = +prompt('введіть двозначне число');
const firstNum = Math.floor(num / 10);
const secondNum = num % 10;

if(num < 10 || num > 99) {
    alert('Невірно введене число')
} else if(firstNum > secondNum) {
    alert('число ' + firstNum + ' больше за число ' + secondNum);
} else if(firstNum < secondNum) {
    alert('число ' + firstNum + ' меньше за число ' + secondNum);
} else if(firstNum === secondNum) {
    alert('число ' + firstNum + ' равно ' + secondNum);
}