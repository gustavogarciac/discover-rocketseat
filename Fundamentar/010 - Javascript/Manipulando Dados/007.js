let techs = ["html", "css", "js"]

//Adicionar item a ultima position
techs.push("React")

//Adicionar item a primeira positon
console.log(techs.unshift('SQL'))

//Remover item do final do array
techs.pop()

//Remover item do começo do array
techs.shift()

//Pegar apenas alguns elementos do array
console.log(techs.slice(1, 2))

//Remover 1 ou mais itens em qualquer posição do array
techs.splice(techs.indexOf("html"), 1)

//Encontrar a posição de um elemento no Array
let index = techs.indexOf("css")

console.log(techs)