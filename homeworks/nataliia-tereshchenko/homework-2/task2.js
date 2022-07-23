const someNumber = prompt("Введіть будь-яке число");

if (someNumber % 2 === 0 && !(+someNumber === 0)) {
    alert("Ваше число закінчується парною цифрою");
} else if (+someNumber === 0) {
    alert("Ваше число дорівнює 0");
} else {
    alert("Ваше число закінчується непарною цифрою");
}

alert("Остання цифра Вашого числа - " + someNumber[someNumber.length - 1]);