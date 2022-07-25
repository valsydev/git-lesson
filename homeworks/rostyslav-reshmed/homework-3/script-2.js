const arrayNum = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let maxNum = 0;

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > maxNum) {
        maxNum = arrayNum[i];
    }
}
console.log(maxNum)