const threeDigitNumber = + prompt("Enter the number", "");

const firstNumber = Math.floor(threeDigitNumber / 100);
const secondNumber = Math.floor((threeDigitNumber % 100) /10);
const thirdNumber = threeDigitNumber % 10;

const sum = firstNumber + secondNumber +thirdNumber;
const product = firstNumber * secondNumber * thirdNumber;

if (sum % 2 ===0 ) {
    alert("The amount is even");
} else {
    alert("The amount is odd");
}

if (sum % 5 === 0) {
    alert ("The number is a multiple of 5");
} else {
    alert("the number is not a multiple of 5");
}

if (product > 100) {
    alert("The product is more than 100");
} else if (product < 100) {
    alert("The product is less than 100");
} else {
    alert("The product is 100");
}