const str = 'Hello San Antonio Fire Department Recruiting';
const newStr = str.replace(/[ea]/gi, '');
const split = newStr.split(' ');
for (let text of split) {
  console.log(text);
}
