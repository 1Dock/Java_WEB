let num = parseInt(prompt("Insert a num"))

if (num % 380 == 0) {
    alert(`ONLY ${num / 380} USD`)
}
else {
    let usd = num / 380
    let cents = (Math.ceil(usd) - usd) * 100
    
    alert(`${Math.floor(usd)} USD and ${cents.toFixed(0)} cents`)
}