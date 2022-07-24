const secondArray = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let maxNumberArray = 0;
for (i = 0; i < secondArray.length; i++) {
  if (secondArray[i] > maxNumberArray) maxNumberArray = secondArray[i];
}
console.log(maxNumberArray);
