const someNumber = prompt("Введіть будь-яке тризначне число");
const sumOfNumbers = +someNumber[0] + +someNumber[1] + +someNumber[2];

if (sumOfNumbers % 2 === 0) {
    alert("Сума цифр вашого числа є парною");
} else {
    alert("Сума цифр вашого числа непарна");
}

if (sumOfNumbers % 5 === 0) {
    alert("Сума цифр вашого числа кратна 5");
} else {
    alert("Сума цифр вашого числа не кратна 5");
}

const multiplicationOfNumbers = someNumber[0] * someNumber[1] * someNumber[2];

if (multiplicationOfNumbers >= 100) {
    alert("Добуток цифр вашого числа більше 100");
} else {
    alert("Добуток цифр вашого числа не більше 100");
}
