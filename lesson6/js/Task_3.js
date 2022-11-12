let n = parseInt(prompt("Insert a amount"))
let sum = 0

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Insert a number " + i))
    sum += num
}

alert(sum + " " + sum / n)