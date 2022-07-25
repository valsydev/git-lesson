let two;

do {
    two = +prompt("Введіть двозначне число");
  } while (two < 10 || two> 100);

const firstNum = Math.floor(two / 10);
const secondNum = two % 10;

if (Number.isNaN(two)) {
    alert ("Incorrect input..");
}

if (firstNum > secondNum) {
    alert ("Перше число більше " + firstNum);
} else if (firstNum < secondNum) {
    alert ("Друге число більше " + secondNum);
} else if (firstNum == secondNum) {  // можно ще використовувати просто else без умови
    alert ("Числа рівні")
}