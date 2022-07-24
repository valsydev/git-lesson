const year = + prompt('Введіть кількість днів в році');

if (year % 4 !== 0) {
    alert('Рік звичайний');
} else if (year % 100 === 0 && year % 400 !== 0) {
    alert("Рік звичайний");
} else {
    alert("Рік високосний");
}