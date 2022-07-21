let number1 = prompt('Введите вашу цифру');
let action = prompt('Что вы хотите сделать? Введите оператора');
let number2 = prompt('Введите ещё цифру');
action === ('+') ? alert(+number1 + +number2):
action === ('-') ? alert(+number1 - +number2):
action === ('*') ? alert(+number1 * +number2):
action === ('/') ? alert(+number1 / +number2):
'';