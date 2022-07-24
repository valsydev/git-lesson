const number = + prompt("Enter the number", "");

const modulo = number % 10;

if (modulo % 2 === 0) {
    alert("Double number");
} else {
    alert("Not a pair number")
}