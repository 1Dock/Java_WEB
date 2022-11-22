const users = [
    {"email": "olzhas.ainabek@gmail.com"}
]

const register = document.getElementById("register")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const passSame = document.getElementById("passSame")

const errorEmail = document.getElementById("errorEmail")
const errorPass = document.getElementById("errorPass")
const errorPassSame = document.getElementById("errorPassSame")

function reg() {
    for (let i = 0; i < users.length; i++) {
        if (email.value == users[i].email) {
            errorEmail.style.color = "red"
        }
        else {
            errorEmail.style.color = "transparent"
        }
    }

    if (pass.value.length < 6) {
        errorPass.style.color = "red"
    }
    else {
        errorPass.style.color = "transparent"
    }

    if (passSame != pass) {
        errorPassSame.style.color = "red"
    }
    else {
        errorPassSame.style.color = "transparent"
    }
}

register.addEventListener("click", reg)