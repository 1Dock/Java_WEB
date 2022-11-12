users = [
    {"login":"ilyas", "password": "qwerty"},
    {"login":"eldar", "password": "qqqqq"},
    {"login":"assylkhan", "password": "qweqwe"},
    {"login":"anel", "password": "asdasd"},
    {"login":"alibek", "password": "aaaaaa"}
]

let login = prompt("Insert a login")
let password = prompt("Insert a password")
let reg = false

for (let i = 0; i < users.length; i++) {
    if (users[i].login == login && users[i].password == password) {
        alert("Welcome, you are authenticated")
        reg = true
    }
}

if (reg == false) {
    alert("User not found")
}

