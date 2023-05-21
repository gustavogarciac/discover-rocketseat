// FUNCTION SCOPE

let subject

function createThink(subject) {
    subject = 'Study'
    return subject
}

if (subject === undefined) {
    subject = `Ainda estou criando um pensamento...`
}
console.log(subject)
console.log(createThink(subject))