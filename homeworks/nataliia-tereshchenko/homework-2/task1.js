const numberA = +prompt("Введіть число а");
const numberB = +prompt("Введіть число b");

if (numberB % numberA === 0) {
    alert("Число a є дільником числа b");
} else {
    alert("Число a не є дільником числа b");
}

const result = numberA % numberB ? "Число b не є дільником числа а" : "Число b є дільником числа а";
alert(result);