// Declarando variável weight
//let weight = 88.3
// Tipo da variável
//console.log(typeof weight);
// Atribuindo valores para cada um dos dados:
/*let name =  'Gustavo'
let age = 18
let stars = 4.8
let isSubscribed = true
*/

/*let student = {
    age: 18,
    name: 'John',
    stars: 4.8,
    isSubscribed: true
}
console.log(student)

console.log(`${student.name} de idade ${student.age} rated us in ${student.stars} stars.`)
*/

let students = [
    {
        age: 18,
        name: 'John',
        rating: 7,
        isSubscribedToNewClass: true,
    },
    {
        age: 23,
        name: "Maria",
        rating: 10,
        isSubscribedToNewClass: false,
    }
]
const gustavo = {
    age: 26,
    name: 'Gustavo',
    rating: 9,
    isSubscribedToNewClass: true,
}

students[2] = gustavo

console.log(students[0])
console.log(students[1])
console.log(students[2])