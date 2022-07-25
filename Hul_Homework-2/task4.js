 usersNumber = +prompt('Введите трёхзначное число', '') || usersNumber > 100 || usersNumber < 999;
  
  sum = 0;
  multiply = 1;
  while (usersNumber) {
      sum += usersNumber % 10;
      multiply *= usersNumber % 10;
      usersNumber = Math.floor(usersNumber / 10);
  }

    if(sum % 2 === 0) {
        alert("Сумма цифр этого числа является чётной");
    } else {
        alert("Сумма цифр этого числа является нечётной");
    }

    if(sum % 5 === 0) {
        alert("Сумма цифр числа кратная 5");
    } else{
        alert("Сумма цифр числа не является кратной  5");
    }

   if (multiply > 100) {
        alert("Результат умножения цифр числа больше, чем 100");
    } else {
        alert("Результат умножения цифр числа меньше, чем 100");
    } 

         
     
  
   
       
    



