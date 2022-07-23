const threeDigits = +prompt("Введіть, будь ласка, тризначне число");
const threeDigits1 = (threeDigits + '')[0];
const threeDigits2 = (threeDigits + '')[1];
const threeDigits3 = (threeDigits + '')[2];
const sum = +threeDigits1 + +threeDigits2 + +threeDigits3;
const product = threeDigits1 * threeDigits2 * threeDigits3;

if (threeDigits < 100) {
    alert("Введене число не відповідає умові");
} else if (threeDigits > 999) {
    alert("Введене число не відповідає умові");
} else {
    if (sum % 2 === 0) {
        alert("Cума цифр парна");
    } else alert("Cума цифр непарна");

    if (sum % 5 === 0) {
        alert("Cума цифр кратна 5");
    } else alert("Cума цифр не кратна 5");

    if (product > 100) {
        alert("Добуток більший ніж 100");
    } else alert("Добуток менший ніж 100");
}
