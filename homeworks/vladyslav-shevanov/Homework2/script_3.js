const twoDigitNumber = + prompt("Enter the number", "");

const firstHalf = Math.floor(twoDigitNumber / 10);
const secondHalf = twoDigitNumber % 10;

if (firstHalf === secondHalf) {
    alert("Numbers are equal");
} else {
    const biggerNumber = firstHalf > secondHalf ? firstHalf : secondHalf;

    if (biggerNumber === firstHalf) {
        alert(`The greater number of the first: ${biggerNumber}`);
    } else {
        alert(`The greater number of the second: ${biggerNumber}`);
    }
}

