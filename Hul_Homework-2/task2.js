
inputNumber = +prompt('Введите двузначное число', '') || inputNumber < 10 || inputNumber > 99;
 if(inputNumber % 2 === 0) {
    alert("Число оканчивается на чётную цифру");
 } else if (inputNumber % 2 === 1){
    alert("Число оканчивается на нечётную цифру");
 }
 
 const str = inputNumber.toString();
 const lastNumber = str.charAt(str.length-1);
 alert(lastNumber);