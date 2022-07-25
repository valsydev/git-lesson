const secondNumberList = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let secondIterator = 0;
let maxNumber = secondNumberList[0];

for (secondIterator = 1; secondIterator < secondNumberList.length; secondIterator++) {
    if (secondNumberList[secondIterator] > maxNumber) {
        maxNumber = secondNumberList[secondIterator];
    }
}

console.log(maxNumber);
