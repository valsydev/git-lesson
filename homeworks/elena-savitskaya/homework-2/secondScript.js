const number = +prompt('Введіть, будь ласка, число');

const result = number % 2;
const lastDigit = number % 10;

if (result === 0) {
    alert('Це число парне, тому що закінчується на' + ' ' + lastDigit);
} else {
    alert('Це число непарне, тому що закінчується на' + ' ' + lastDigit);
}
