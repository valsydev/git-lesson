const someNumber = prompt("Введіть будь-яке двозначне число");
const firstNumber = someNumber[0];
const secondNumber = someNumber[1];

if (firstNumber > secondNumber) {
    alert("Перша цифра більша за другу");
} else {
    alert("Друга цифра більша за першу");
}