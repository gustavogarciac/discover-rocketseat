// Type conversion vs Type Coersion

//console.log('9' + 5) // Coercitivamente o JS transformou o Number em String para haver a concatenação.

//console.log(Number('9') + 5) // Houve conversão da string '9' explicitamente para número. Ocorrendo, portanto, a adição.


// String to Number vs Number to String

/*let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))*/

/*let word = 'Paralelepípedo'
console.log(word.length)
let number = 123
console.log(String(number).length)*/


//let number = 312.512312312512
//console.log(number.toFixed(2).replace('.', ','))

let word = "Programar é uma delicinha."
console.log(word.toUpperCase())
console.log(word.toLowerCase())