const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
let num = document.getElementById("num")
let count = 1
num.innerHTML = count

function plusNum() {
    count++
    num.innerHTML = count
}

function minusNum() {
    count--
    num.innerHTML = count
}

plus.addEventListener("click", plusNum)
minus.addEventListener("click", minusNum)