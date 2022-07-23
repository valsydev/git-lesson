const Number = [2, 45, 3, 67, 34, 567, 34, 345, 123]
let maxNumber = Number[0]

for (let i = 1; i <= Number.length; i++) {
    if (Number[i] > maxNumber) {
        maxNumber = Number[i]
    }
}

alert(maxNumber)
