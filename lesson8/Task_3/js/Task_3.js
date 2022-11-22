let users = [
    {"card": "4413434135342424", "nameSurname": "ILYAS ZHUANYSHEV", "cvv": "533"}
]

const complete = document.getElementById("complete")
const cards = document.getElementById("card").getElementsByTagName("input")
const nameSurname = document.getElementById("nameSurname")
const cvv = document.getElementById("cvv")

function payment() {
    let numCard = ""
    let found = false

    for (let card of cards) {
        numCard += card.value
    }

    for (let i = 0; i < users.length; i++) {
        if (numCard == users[i].card && nameSurname.value == users[i].nameSurname && cvv.value == users[i].cvv) {
            found = true
            break
        }
    }

    if (found) {
        alert("Transaction completed")
    }
    else {
        alert("Invalid Data")
    }
}

complete.addEventListener("click", payment)