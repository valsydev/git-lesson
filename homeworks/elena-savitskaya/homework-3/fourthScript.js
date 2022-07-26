// *** to be hero ( optional )
// написать код, который принимает на вход строку "Hello San Antonio Fire Department Recruiting" 
// и вывести в консоль все слова поочередно, удалив все буквы 'e', 'a'.


let str = 'Hello San Antonio Fire Department Recruiting';
str = str.replace(/[ea]/gi, '');

let arr = str.split(' ');

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
