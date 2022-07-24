let numb = [];
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j < i; j++) {
    if (!numb[i]) numb[i] = [];
    numb[i].push(j);
  }
}
console.log(numb);
