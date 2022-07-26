const firstNumberAverage = +prompt("Enter the first number average", "");
const secondNumberAverage = +prompt("Enter the second number average", "");
const thirdNumberAverage = +prompt("Enter the third number average", "");
if (isNaN(firstNumberAverage) || isNaN(secondNumberAverage) || isNaN(thirdNumberAverage)) {
    alert('Hello');
}
const average = (firstNumberAverage + secondNumberAverage + thirdNumberAverage) / 3;
document.write('(', firstNumberAverage, '+', secondNumberAverage, '+', thirdNumberAverage, ')', '/3', '=', average);
alert(average);