let time = parseInt(prompt("Insert a num"))

if (time % 60 === 0) {
    alert(`ONLY ${num / 60} HOURS`)
}
else {
    let hours = time / 60
    let minutes = (hours - Math.floor(hours)) * 60

    alert(`${Math.floor(hours)} HOURS and ${minutes.toFixed(0)} MINUTES`)
}