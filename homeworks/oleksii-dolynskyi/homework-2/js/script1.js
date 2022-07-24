const a = parseInt(prompt("введите число a"));
const b = parseInt(prompt("введите число b"));
if(a % b == 0) {
    alert('число b делитель числа a');
} else {
    alert('число b не является делителем числа a');
}
if(b % a == 0) {
    alert('число a делитель числа b');
} else {
    alert('число a не является делителем числа b');
}