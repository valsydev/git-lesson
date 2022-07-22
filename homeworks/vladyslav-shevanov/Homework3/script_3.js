let string = '';
const pyramid = {};

for (let i = 1; i < 9; i++) {
    if(!pyramid[i]){
        pyramid[i] = [];
    }
    if (i !== 1) {
        string = string + ' ' + i;
    } else {
        string = string + i;
    }
    pyramid[i].push(string);
}
console.log(pyramid);