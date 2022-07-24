const y = +prompt ("Введіть число на перевірку");
const residue = y % 10;
const divisor = residue % 2;

if (Number.isNaN(y)) {
    alert ("Incorrect input..");
}

if (divisor === 0) {
    alert ("Число закінчуеться на " + residue + " і воно парне");
}   else {
    alert ("Число закінчуеться на " + residue + " і воно не парне");
}
