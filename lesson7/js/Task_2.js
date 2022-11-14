let sum = 0
let amount = 0
let num = parseInt(prompt("Insert a num"))

while (num != 0) {
    sum += num
    amount++
    num = parseInt(prompt("Insert a num"))
}

let res = sum / amount
alert(res)