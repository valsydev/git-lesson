const digit = parseInt(prompt("введите трехзначное число"));
const secondNumb= (Math.trunc(digit /10) % 10);
const firstNumb = (Math.trunc(digit / 100));
const thirdNumb = digit % 10;

const sum = firstNumb + secondNumb + thirdNumb;

if (sum % 2 == 0) {
    alert('сумма чисел парная');
} else {
    alert('сумма чисел непарная');
}
if(sum % 5 == 0) {
    alert('сумма чисел кратна 5ти');
} else {
    alert('сумма чисел не кратна 5ти');
}
if((firstNumb ** secondNumb ** thirdNumb) > 100) {
    alert('произведение чисел больше 100');
} else {
    alert('произведение чисел меньше 100');
}
console.log(firstNumb);
console.log(secondNumb);
console.log(thirdNumb);