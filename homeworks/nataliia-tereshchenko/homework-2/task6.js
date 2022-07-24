const someYear = +prompt("Введіть будь-який рік");

if (!(someYear % 4 === 0)) {
    alert("Це звичайний рік");
} else if (someYear % 100 === 0 && !(someYear % 400 === 0)) {
    alert("Це звичайний рік");
} else {
    alert("Це високосний рік");
}