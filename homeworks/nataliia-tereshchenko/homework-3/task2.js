const arrayForNumbers = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let largestNumber = arrayForNumbers[0];

for (let i = 0; i < arrayForNumbers.length; i++) {
    
    if (largestNumber < arrayForNumbers[i]) {
        largestNumber = arrayForNumbers[i];
    }  
}

alert(`${largestNumber} - найбільше число з масиву`);
