let num1 = parseInt(prompt("Insert a num1"))
let num2 = parseInt(prompt("Insert a num2"))
let num3 = parseInt(prompt("Insert a num3"))

alert(num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2 ? "YES" : "NO")