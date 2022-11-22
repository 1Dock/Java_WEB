const users = [
    {"login": "olzhas", "pass": "qwerty"},
    {"login": "Ilyas", "pass": "uiop"},
]


const submitButton = document.getElementById("submitButton")
const login = document.getElementById("login")
const pass = document.getElementById("pass")

function authorization() {
    let found = false

    for (let i = 0; i < users.length; i++) {
        if (login.value == users[i].login && pass.value == users[i].pass) {
            found = true
            break
        }
    }
    if (found) {
        document.body.style.display="none"
        alert("You are authenticated")
    }
    else {
        login.style.borderColor="red"
        pass.style.borderColor="red"
    }
}

submitButton.addEventListener("click", authorization)