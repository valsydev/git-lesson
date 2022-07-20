const year = + prompt("Enter the year", "");

if (year % 4 !== 0) {
    alert("Not a leap year");
} else if (year % 100 === 0 && year % 400 !== 0) {
    alert("Not a leap year");
} else {
    alert("A leap year");
}