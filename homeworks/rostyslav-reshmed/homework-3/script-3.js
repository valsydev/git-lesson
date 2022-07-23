let piramide = "";

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == j) {
            piramide += j + " ";
        }
    }
    console.log(piramide);
}