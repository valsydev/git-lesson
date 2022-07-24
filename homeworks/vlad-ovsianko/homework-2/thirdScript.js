const firstNumberThirdScript = parseInt(prompt('Enter number (от 10ти до 99ти включительно) : '));
let firstNumeric = Math.floor(firstNumberThirdScript / 10);
let secondNumeric = Math.floor(firstNumberThirdScript % 10);

if (isNaN(firstNumberThirdScript)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (firstNumeric === secondNumeric) {
    alert(`число ${firstNumeric} = числу ${secondNumeric}`);
} else if (firstNumberThirdScript <= 10 || firstNumberThirdScript >= 99) {
    alert(`${firstNumberThirdScript} должно быть в диапазане от 10 до 99 включительно`);
} else if (firstNumeric > secondNumeric) {
    alert(`число ${firstNumeric} больше чем число ${secondNumeric}`);
} else {
    alert(`число ${secondNumeric} больше чем число ${firstNumeric}`)
}
