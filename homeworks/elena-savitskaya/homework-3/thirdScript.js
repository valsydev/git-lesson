const table = {}

for (let i = 1; i <= 9; i++) {
    for (let n = 1; n < i; n++) {
        if (!table[i]) {
            table[i] = []
        }
        table[i].push(n)
    }
}

console.log(table)

