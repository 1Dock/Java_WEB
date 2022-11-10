let money = parseInt(prompt("INSERT YOUR AMOUNT IN KZT:"))
let currency = parseInt(prompt(
    "1- CONVERT TO USD\n" +
            "2- CONVERT TO EUR\n" +
            "3- CONVERT TO GBP"
))

let sum = 0;
let currencyStr = ""

if (currency === 1) {
    sum = money / 380
    currencyStr = "USD"
}
else if (currency === 2) {
    sum = money / 430
    currencyStr = "EUR"
}
else {
    sum = money / 480
    currencyStr = "GBP"
}

alert(`${money} KZT = ${sum.toFixed(2) + " " + currencyStr}`)
