const inputString = "Hello San Antonio Fire Department Recruiting";
const newString = inputString.replace(/[ea]/gi, '');
const split = newString.split(' ');

for (let i = 0; i < split.length; i++) {
    console.log(split[i]);
}