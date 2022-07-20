const firstNumberSecondScript = parseInt(prompt('Enter number: '));
let secondNumberSecondScript = firstNumberSecondScript || secondNumberSecondScript;
secondNumberSecondScript = secondNumberSecondScript % 10

if (isNaN(firstNumberSecondScript)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (firstNumberSecondScript % 2 === 0) {
    let firstResultSecondScript = firstNumberSecondScript % 2 === 0;
    alert(firstResultSecondScript + ` - число ${firstNumberSecondScript} является парным
    \n ${secondNumberSecondScript} - последняя цифра чилса ${firstNumberSecondScript}`);
} else {
    let secondResultSecondScript = firstNumberSecondScript % 1 === 0;
    alert(secondResultSecondScript + ` - число ${firstNumberSecondScript} не является парным
    \n ${secondNumberSecondScript} - последняя цифра чилса ${firstNumberSecondScript}`);
}
