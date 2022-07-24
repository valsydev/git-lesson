const number = parseInt(prompt("введите двухзначное число"));
const secondNum= number % 10;
const firstNum = (number- secondNum) / 10;
if(secondNum < firstNum) {
    alert('первая цифра больше');
} else if (secondNum > firstNum){
    alert('вторая цифра больше');
} else {
    alert('цифры равны');
}
