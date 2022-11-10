let whiskas = parseInt(prompt("Insert a num1"))
let sum = whiskas * 120;

if (sum > 4000) {
    let cashback = sum * 10 / 100;
    sum -= cashback
}

alert(`${sum} KZT`)