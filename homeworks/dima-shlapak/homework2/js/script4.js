const threeDigitNumber = prompt('Введіть тризначне число');
const firstDigit1 = Math.floor(threeDigitNumber / 100);
const secondDigit1 = Math.floor(threeDigitNumber % 100 / 10);
const threeDigit1 = Math.floor(threeDigitNumber % 100 % 10);
const sum = firstDigit1 + secondDigit1 + threeDigit1;
const multiplication = firstDigit1 * secondDigit1 * threeDigit1;
 
if(threeDigitNumber < 100 || threeDigitNumber > 999) {
    alert('Невірно введене число');
} else {
    if(sum % 2 === 0) {
        alert('Сума чисел є парною, та дорівнює: ' + sum);
    } else {
        alert('Сума чисел не є парною, та дорівнює: ' + sum);
    }
    if(sum % 5 === 0) {
        alert('Сума чисел кратна 5');
    } else {
        alert('Сума чисел не кратна 5');
    }
    if(multiplication > 100) {
        alert('Добуток чисел більше 100');
    } else {
        alert('Добуток чисел менше 100');
    }
}