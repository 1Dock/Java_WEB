let n = parseInt(prompt("Insert a amount"))
let arr = []

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Insert a number " + i))
    arr.push(Math.pow(num, 2))
}

alert(arr)