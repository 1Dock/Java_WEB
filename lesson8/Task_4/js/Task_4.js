const back = document.getElementById("back")
const next = document.getElementById("next")
const Pictures = document.getElementsByTagName("img")

let num = 0

function nextImg() {
    Pictures[num].style.display="none"
    if (num + 1 == Pictures.length) {
        num = 0
        Pictures[num].style.display="block"
    }
    else {
        num++
        Pictures[num].style.display="block"
    }
}

function backImg() {
    Pictures[num].style.display="none"
    if (num - 1 < 0) {
        num = Pictures.length - 1
        Pictures[num].style.display="block"
    }
    else {
        num--
        Pictures[num].style.display="block"
    }
}

back.addEventListener("click", backImg)
next.addEventListener("click", nextImg)