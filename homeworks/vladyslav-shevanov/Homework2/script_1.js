const a = +prompt("Enter the number a", "");
const b = +prompt("Enter the number b", "");

if (a === b) {
    alert("Numbers are divisors of each other");
} else {
    if ((b/a) % 1 === 0) {
        alert("'a' is a divisor of the integer 'b'");
        alert("'b' is not a divisor of 'a'");
    } else if ((a/b) % 1 === 0) {
        alert("'b' is a divisor of the integer 'a'");
        alert("'a' is not a divisor of 'b'")
    } else {
        alert("numbers are not divisors");
    }
}
