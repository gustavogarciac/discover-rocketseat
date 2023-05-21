// Declarando variáveis:
let username = "Gustavo"
console.log(typeof username)

//Agrupando declarações
let age, isHuman

age = 18
isHuman = true

console.log(`${username} possui ${age} anos. Ele é humano? ${isHuman}`) // Interpolando Valores
console.log(username + ' possui ' + age + " anos. Ele é humano? " + isHuman) // Concatenando Valores

// OBJECTS

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos, pesa ${person.weight}. Ele é um admin? ${person.isAdmin}`)

// ARRAY
const tech = [
    'Mac',
    'Linux',
    'Windows',
    {
        techname: 'MacOS',
        techage: '1958'
    }
]
console.log(tech[3].techname + tech[3].techage)