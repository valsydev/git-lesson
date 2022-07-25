let myArray = [1];
let result = '';

while (myArray.length < 9) {
    result += myArray.join(' ') + '\n';
    myArray.push(myArray.length + 1);
    if (myArray.length === 9) {
        result = result.slice(0, -1);
    }
}

console.log(result);
