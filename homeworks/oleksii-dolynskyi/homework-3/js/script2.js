var maxNum = [2, 45, 3, 67, 34, 567, 34, 345, 123];
for (var i = 0; i < maxNum.length; i++) {
    if(maxNum[0] < maxNum[i]){
        maxNum[0] = maxNum[i];
    }
}
console.log(maxNum[0]);