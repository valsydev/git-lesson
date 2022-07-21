const year = +prompt('Введіть, будь ласка, рік');

if (year % 4 != 0 || year % 100 === 0 && year % 400 != 0) {
    alert("Рік звичайний");
} else {
    alert("Рік високосний");
} 
