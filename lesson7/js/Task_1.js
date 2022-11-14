let num = parseInt(prompt("Insert a number n"))
let arrNum = []

for (let i = 0; i < num; i++) {
    let number = parseInt(prompt("Insert a number " + i))
    arrNum.push(number)
}

let m = parseInt(prompt("Insert a number m"))
let bool = false

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === m) {
        alert("YES " + i)
        bool = true
    }
}

if (bool === false) {
    alert("NO")
}