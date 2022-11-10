let log = "user"
let pass = "qwerty"

let login = prompt("Insert a login")
let password = prompt("Insert a password")

alert(login === log && password === pass ? "Authentication completed" : "Invalid login or password")