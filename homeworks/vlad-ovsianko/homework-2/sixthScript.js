const yearSixthScript = parseInt(prompt('Enter year : '));
let firstNumberSixthScript = yearSixthScript % 4;
let secondNumberSixthScript = yearSixthScript % 100;
let thirdNumberSixthScript = yearSixthScript % 400;

if (isNaN(yearSixthScript)) {
    alert('Обновите страницу и пишите нормально числа. Договорились ?');
} else if (firstNumberSixthScript === 0) {
    alert(`${yearSixthScript} год - высокостный (366 дней в году)`);
} else if (secondNumberSixthScript === 0 & thirdNumberSixthScript !== 0) {
    alert(`${yearSixthScript} год - высокостный (366 дней в году)`);
} else {
    alert(`${yearSixthScript} год - не высокостный (365 дней в году)`)
}
