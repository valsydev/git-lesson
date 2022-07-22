const a = +prompt ("Введіть перше число a");
const b = +prompt ("Введіть друге число b");

const residueFirst = b % a;
const residueSecond = a % b;

if (Number.isNaN(residueFirst, residueSecond)) {
    alert ("Incorrect input..");
}

 if (residueFirst === 0) {
    alert ("Число a є дільником числа b");
}   else {
    alert ("Число a НЕ є дільніком b");
}

 if (residueSecond === 0) {
    alert ("Число b є дільником числа a");
}   else {
    alert ("Число b НЕ є дільніком a");
}




