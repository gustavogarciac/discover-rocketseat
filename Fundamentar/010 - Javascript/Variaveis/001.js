/* VARIÁVEIS
Utilizadas para o armazenamento de dados.
Pode-se utilizar 3 palavras reservadas:

var
let
const -> permanece com o valor inalterado.

*/
//var clima = "Quente";
//console.log(clima)
//let nome = "Gustavo";
//console.log(nome)
/* SCOPE
Determina a visibilidade de alguma variável no JS 
VAR -> possui escopo global e, também local. Capaz de Hoisting.
LET -> Apenas existem dentro do escopo criado. 
*/

console.log('Existe x antes do bloco?', x)

{
    //Aqui dentro é um bloco e posso colocar qualquer código.
    var x = 0
    console.log(x)
}

console.log('Existe y antes do bloco?', `Não.`)
let y = 1
{
    let y = 0
    console.log(y)
}
console.log(`Existe y depois do bloco?`, y) 