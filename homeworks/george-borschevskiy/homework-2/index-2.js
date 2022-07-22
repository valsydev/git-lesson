// Дано число. Визначити, чи закінчується воно парною цифрою, чи непарною? Вивести останню цифру.

const number = +prompt('enter number')

const lastNum = number.toString().split('').pop()

if (lastNum % 2 === 0) {
    alert('цифра парна');
} else {
    alert('цифра не парна');
}