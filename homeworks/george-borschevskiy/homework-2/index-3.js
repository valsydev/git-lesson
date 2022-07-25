// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const number = +prompt('enter number')

const arrOfTwoNums = number.toString().split('')

const firstNumber = arrOfTwoNums[0]
const secondNumber = arrOfTwoNums[1]

if (firstNumber > secondNumber) {
    alert('перша фийра більша')
} else if (firstNumber < secondNumber){
    alert('друга цийра більша')
} else {
    alert('вони однакові')
}