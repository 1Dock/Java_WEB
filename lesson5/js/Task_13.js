let branch = prompt(`
Choose your branch:
1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:
`)

if (branch == 1) {

    let branch1 = prompt(`
    1 - Math, 2 - Physics:
    `)

    if (branch1 == 1) {
        alert("You are Financier")
    }
    else if (branch1 == 2) {
        alert("You are Engineer")
    }
}
else if (branch == 2) {

    let branch2 = prompt(`
    1 - History, 2 - Foreign Languages:
    `)

    if (branch2 == 1) {
        alert("You are Historic or Diplomat  ")
    }
    else if (branch2 == 2) {
        alert("You are Translator")
    }
}
else if (branch == 3) {

    let branch3 = prompt(`
    1 - Drawing, 2 -Singing:
    `)

    if (branch3 == 1) {
        alert("You are Painter or Architect")
    }
    else if (branch3 == 2) {
        alert("You are Singer or Tamada")
    }
}
else if (branch == 4) {

    let branch4 = prompt(`
    1 - Team, 2 - Individual:
    `)

    if (branch4 == 1) {
        alert("You are footballer or Basketball player")
    }
    else if (branch4 == 2) {
        alert("You are boxer or tennis player")
    }
}
