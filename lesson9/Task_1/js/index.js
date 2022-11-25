let dataObj = {}

const name = document.getElementById("name")
const surname = document.getElementById("surname")
const country = document.getElementById("country")
const phone = document.getElementById("phone")

function saveToDraft() {
    dataObj.name = name.value
    dataObj.surname = surname.value
    dataObj.country = country.value
    dataObj.phone = phone.value

    localStorage.data = JSON.stringify(dataObj)
}

function updateDataList() {
    name.value = dataObj.name
    surname.value = dataObj.surname
    country.value = dataObj.country
    phone.value = dataObj.phone
}

function initObj() {
    if (localStorage.data != null) {
        dataObj = JSON.parse(localStorage.data)
        updateDataList()
    }
}

document.getElementById("save").addEventListener("click", saveToDraft)


