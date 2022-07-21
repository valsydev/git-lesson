const firstNumberForthScript = parseInt(prompt('Enter number >100 : '));
let firstDigit = Math.floor(firstNumberForthScript % 10);
let secondDigit = Math.floor(firstNumberForthScript % 100 / 10);
let thirdDigit = Math.floor(firstNumberForthScript / 100);
let firstValue = firstDigit + secondDigit + thirdDigit;
let multiplicationSum = firstDigit * secondDigit * thirdDigit;

if (isNaN(firstNumberForthScript)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (firstNumberForthScript >= 100 & firstNumberForthScript <= 999) {
    let messageResponse = ` сумма цифр ${firstNumberForthScript} = ${firstValue}\n ${firstValue} `;
    if (firstValue % 5 === 0) {
        messageResponse += 'кратно 5ти';
    } else {
        messageResponse += 'не кратно 5ти';
    }
    if (multiplicationSum < 100) {
        alert(messageResponse += ` \n${multiplicationSum} произведение меньше 100`);
    } else {
        alert(messageResponse += ` \n${multiplicationSum} произведение больше 100`);
    }
} else {
    alert(`${firstNumberForthScript} должно быть в диапазане от 100 до 999 включительно`);
}
