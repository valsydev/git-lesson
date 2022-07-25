const arrayForNumb = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let maxNumb = arrayForNumb[0];

for ( i = 0; i < arrayForNumb.length; i++) {
    if(arrayForNumb[i] > maxNumb) {
        maxNumb = arrayForNumb[i];
    }
}
alert(`${maxNumb} - найбільше число`);