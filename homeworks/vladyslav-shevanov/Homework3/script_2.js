const arrayNumber = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let maxNumber = 0;

for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > maxNumber) {
        maxNumber = arrayNumber[i];
    }
}
alert(maxNumber);