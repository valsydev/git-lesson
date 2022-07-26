let str = 'Hello San Antonio Fire Department Recruiting';
let stringWithoutEA = str.replace(/[e,a]/gi, '',);
let arr = stringWithoutEA.split(' ');

for (let word of arr) {
    console.log(word);
}