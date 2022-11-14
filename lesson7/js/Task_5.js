cars = [
    {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
    {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
    {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
    {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
    {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}
];

let number = parseInt(prompt(`
INSERT [1] TO SEARCH BY NAME
INSERT [2] TO SEARCH BY YEAR
INSERT [3] TO SEARCH BY ENGINE VOLUME
INSERT [4] TO SEARCH BY PRICE
INSERT [5] TO EXIT
`))

let text = ""

while (true) {
    if (number == 1) {
        let nameCar = prompt("INSERT NAME OF CAR:")

        if (nameCar == 0) {
            break
        }

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].name == nameCar) {
                text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            }
        }

        alert(text)
        text = ""
    }
    else if (number == 2) {
        let nameYearStart = parseInt(prompt("INSERT YEAR START FROM:"))
        let nameYearEnd = parseInt(prompt("INSERT YEAR ENDS FROM:"))

        if (nameYearStart == 0) {
            break
        }

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].year >= nameYearStart && cars[i].year < nameYearEnd) {
                text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            }
        }

        alert(text)
        text = ""
    }
    else if (number == 3) {
        let nameVolumeStart = parseFloat(prompt("INSERT ENGINE VOLUME START FROM:"))
        let nameVolumeEnd = parseFloat(prompt("INSERT ENGINE VOLUME ENDS FROM:"))

        if (nameVolumeStart == 0) {
            break
        }

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].year >= nameVolumeStart && cars[i].year < nameVolumeEnd) {
                text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            }
        }

        alert(text)
        text = ""
    }
    else if (number == 4) {
        let namePriceStart = parseInt(prompt("INSERT PRICE START FROM:"))
        let namePriceEnd = parseInt(prompt("INSERT PRICE ENDS FROM:"))

        if (namePriceStart == 0) {
            break
        }

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].year >= namePriceStart && cars[i].year < namePriceEnd) {
                text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            }
        }

        alert(text)
        text = ""
    }
    else if (number == 5) {
        break
    }
}