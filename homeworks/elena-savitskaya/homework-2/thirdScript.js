const num = +prompt("Введіть, будь ласка, двозначне число");
const firstnumber = (num + '')[0];
const secondnumber = (num + '')[1];

if (num < 10) {
    alert("Введене число не відповідає умові");
} else if (num > 99) {
    alert("Введене число не відповідає умові");
} else {
    if (firstnumber > secondnumber) {
        alert("Перша цифра більша за другу");
    } else if (firstnumber < secondnumber) {
        alert("Друга цифра більша за першу");
    } else if (firstnumber === secondnumber) {
        alert("Цифри рівні");
    }
}
