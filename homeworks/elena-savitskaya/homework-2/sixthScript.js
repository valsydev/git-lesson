const year = +prompt('Введіть, будь ласка, рік');

if (year % 4 != 0) {
    alert("Рік звичайний");
}
    else if (year % 100 === 0 && year % 400 != 0) {   
            alert("Рік звичайний");
}
    else {    
        alert("Рік високосний");
    } 

