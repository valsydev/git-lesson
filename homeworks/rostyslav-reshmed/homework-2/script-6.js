const year = +prompt ("Введіть рік на перевірку");

if ((year % 4 === 0 ) && (year % 100 != 0) || (year % 400 ===0)) {
        alert (year + ' рік високосний');
    } else {
        alert (year + ' рік НЕ високосний');
    }