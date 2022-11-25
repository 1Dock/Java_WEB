const catalogArray = [
    {"name": "IPhone 12 Pro", "price": "1200"},
    {"name": "XIAMOR REDMI NOTE 8", "price": "250"},
    {"name": "ASUS Tuf Gaming Pro", "price": "1500"},
    {"name": "Samsung Galaxy Note 13", "price": "999"}
]
let basketArray = []

const catalog = document.getElementsByClassName("product")

let tbody = document.getElementById("tbody")

for (let i = 0; i < catalog.length; i++) {
    catalog[i].addEventListener("click", getIndexElement)

    function getIndexElement() {
        getElementByIndex(i)
    }
}

function removeToIndex(i) {
    basketArray.splice(i, 1)
    updateStorage()
    updateBasket()
}

function getElementByIndex(index) {
    for (let i = 0; i < catalogArray.length; i++) {
        if (i == index) {
            basketArray.push(catalogArray[i])
            updateStorage()
            updateBasket()
        }
    }
}

function updateStorage() {
    localStorage.basket = JSON.stringify(basketArray)
}

function updateBasket() {
    tbody.innerHTML = ""

    for(let i = 0; i < basketArray.length; i++){
        let tr = document.createElement('tr')
        let nameTd = document.createElement("td")
        let priceTd = document.createElement("td")
        let removeTd = document.createElement("td")
        let removeButton = document.createElement("button")

        removeButton.className = "remove"
        removeButton.innerHTML = "- REMOVE"
        removeButton.addEventListener("click", function () {
            removeToIndex(i)
        })
        removeTd.append(removeButton)

        nameTd.innerHTML = basketArray[i].name
        priceTd.innerHTML = basketArray[i].name
        tr.append(nameTd)
        tr.append(priceTd)
        tr.append(removeTd)

        tbody.append(tr);
    }
}

function initArray() {
    if (localStorage.basket != null) {
        basketArray = JSON.parse(localStorage.basket)
        updateBasket()
    }
}