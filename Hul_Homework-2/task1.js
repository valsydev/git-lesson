const a = +prompt('Введите первое число', '');
const b = +prompt('Введите второе число', '');

if(a === b) {
    alert("Числа являются делителями");
} else {
    if ( (b / a) % 1 === 0) {
        alert('Первое число является делителем второго');
        alert('Второе число не является делителем первого');
    } else if ( (a / b) % 1 === 0) {
        alert('Второе число является делителем первого');
        alert('Первое число не является делителем второго')
    } else {
        alert('Эти числа не являются делителями');
    }
}