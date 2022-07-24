const mainString = "Hello San Antonio Fire Department Recruiting";
const newStringWithoutE = mainString.replace(/e/g, '');
const newStringWithoutA = newStringWithoutE.replace(/a/g, '');
const arrayFromString = newStringWithoutA.split(' ');

for (let i = 0; i < arrayFromString.length; i++) {
    console.log(arrayFromString[i]);
}