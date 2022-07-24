
let acceptingScore = +prompt("Назовите проходной бал для сдачи теста по JavaScript" , '');
let usersScore = +prompt("Назовите свой бал теста по JavaScript" , '');

if (acceptingScore === usersScore) {
    alert('Поздравляю, Вы успешно прошли тест!')
}  else {
    alert(' Тест не пройден. Потренируйтесь еще')
}
