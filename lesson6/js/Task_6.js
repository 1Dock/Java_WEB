books = [
    {"Name":"Harry Potter and the Philosopher's Stone", "author": "Joanne Rowling", "ISBN": "1233123", "price": "50$"},
    {"Name":"Harry Potter and the Philosopher's Stone", "author": "Joanne Rowling", "ISBN": "222332", "price": "40$"},
    {"Name":"Harry Potter and the Philosopher's Stone", "author": "Joanne Rowling", "ISBN": "452323", "price": "55$"},
]

let text = prompt("Insert a parameter")

for (let i = 0; i < books.length; i++) {
    if (books[i].Name == text || books[i].author == text || books[i].ISBN == text || books[i].price == text) {
        console.log(books[i].Name + " - " + books[i].author + " - " + books[i].ISBN + " - " + books[i].price)
    }
}

