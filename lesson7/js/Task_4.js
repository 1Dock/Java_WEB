let num = parseInt(prompt("Insert a num"))
let sumPositive = 1

for (let i = 0; i < num; i++) {
    let number = parseInt(prompt("Insert a number"))
    if (number != 0) {
        sumPositive *= number
    }
}

alert(sumPositive)