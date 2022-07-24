const year = parseInt(prompt("введите год"));

if ( year % 4 != 0) {
   alert('год обычный');
} else if (year % 100 == 0 && year % 400 != 0){
    console.log('год обычный');
} else {
    alert('год высокосный');
}