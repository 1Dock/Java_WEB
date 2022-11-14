students = []

while (true) {
    let num = prompt(`
PRESS 1 TO ADD STUDENT
      
PRESS 2 TO LIST STUDENT
      
PRESS 0 TO EXIT
`)

    if (num == 1) {
        let name = prompt("INSERT NAME:")
        let surname = prompt("INSERT SURNAME:")
        let gpa = parseFloat(prompt("INSERT GPA:"))

        const student = {name: name, surname: surname, gpa: gpa}

        students.push(student)
    }
    else if (num == 2) {
        let text = ""

        for (let i = 0; i < students.length; i++) {
            text += students[i].name + " " + students[i].surname + " gpa: " + students[i].gpa + "\n"
        }

        alert(text)
    }
    else if (num == 0) {
        break
    }
}