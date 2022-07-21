// Дано тризначне число.
// 1) Визначити чи є парною сума його цифр.
// 2) Визначити, чи кратна сума цифр п'яти.
// 3) Визначити чи є добуток його цифр більше ніж 100.

const number = +prompt('enter number')

const arrOfNums = Array.from(`${number}`)

const firstNum = Number(arrOfNums[0])
const secondNum = Number(arrOfNums[1])
const thirdNum = Number(arrOfNums[2])

const sumOfNums = firstNum + secondNum + thirdNum
const productOfNumbers = firstNum * secondNum * thirdNum

// -- 1

if (sumOfNums % 2 === 0) {
    alert('сума парна')
} else {
    alert('сума не парна')
}

// -- 2

if (sumOfNums % 5 === 0) {
    alert("кратна п'яти")
} else {
    alert("не кратна п'яти")
}

// -- 3

if (productOfNumbers > 100) {
    alert("більше ніж 100")
} else if (productOfNumbers < 100){
    alert("менше ніж 100")
} else {
    alert("дорiвнюе 100")
}