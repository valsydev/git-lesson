const num = parseInt(prompt("введите двухзначное число"));
const secondDigit = num % 10;
if(secondDigit % 2 == 0) {
    alert('последняя цифра парная');
} else {
    alert('последняя цифра непарная');
}
alert("последняя цифра :"+secondDigit);