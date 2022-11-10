let year = prompt("Insert a year")

alert(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "YES" : "NO")