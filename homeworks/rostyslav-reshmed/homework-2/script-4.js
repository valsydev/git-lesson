let threeNum;

do {
  threeNum = +prompt("Введіть тризначне число");
} while (threeNum < 100 || threeNum > 1000);

if (Number.isNaN(threeNum)) {
    alert ("Incorrect input..");
}

const firstNum = Math.floor(threeNum / 100);
const secondNum = Math.floor(threeNum / 10) % 10;
const thirdNum = threeNum % 10;
const sumNum = firstNum + secondNum + thirdNum;
const product = firstNum * secondNum * thirdNum;

if (sumNum % 2 === 0) {
    alert ("Сума тризначного числа " + sumNum + " парна");
} else {
    alert ("Сума тризначного числа " + sumNum + " НЕ парна");
}

if (sumNum % 5 === 0) {
    alert ("Сума тризначного числа кратна 5");
} else {
    alert ("Сума тризначного числа НЕ кратна 5");
}

if (product > 100) {
    alert ("Добуток тризначного числа більше ніж 100");
} else  if ( product < 100) {
    alert ("Добуток тризначного числа менше ніж 100");
} else {
    alert ("Добуток тризначного числа дорівнює 100");
}




