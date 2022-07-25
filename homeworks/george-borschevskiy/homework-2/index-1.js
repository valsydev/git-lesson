// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

const firstNum = +prompt('enter first num')
const secondNum = +prompt('enter second num')

const remainderFirst = firstNum % secondNum
const remainderSecond = secondNum % firstNum

if ( remainderFirst > 0 ) {
    alert(`число ${firstNum} не є дільником числа ${secondNum}`)
} else {
    alert(`число ${firstNum} є дільником числа ${secondNum}`)
}

if ( remainderSecond > 0 ) {
    alert(`число ${secondNum} не є дільником числа ${firstNum}`)
} else {
    alert(`число ${firstNum} є дільником числа ${secondNum}`)
}