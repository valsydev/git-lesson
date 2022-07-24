const firstNumberfifthScript = parseInt(prompt('Enter number: '));

if (isNaN(firstNumberfifthScript)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (firstNumberfifthScript > 500 || firstNumberfifthScript < 0) {
    alert(`Число ${firstNumberfifthScript} не входит в диапозон от 0 до 500`);
} else {
    alert(`Число ${firstNumberfifthScript} входит в диапозон от 0 до 500`);
}
