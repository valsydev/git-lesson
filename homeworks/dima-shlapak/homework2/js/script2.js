const number = +prompt('Введіть число');
const lastDigit = number % 10;

if (number % 2 === 0) {
    alert('Це число парне, тому що закінчується на ' + lastDigit);
} else {
    alert('Це число непарне, тому що закінчується на ' + lastDigit);
}