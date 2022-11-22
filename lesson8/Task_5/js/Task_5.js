const pictures = document.querySelectorAll("#pictures img")
const mainImg = document.getElementById("main-img")

function show(event) {
    const src = event.target.src
    mainImg.src = src
}

for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", show)
}