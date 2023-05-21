/* let nota = 100

if (nota <= 100 && nota >= 0) {
    if (nota < 60) {
        nota = 'F' 
    } else if (nota < 70) {
        nota = 'D'
    } else if (nota < 80) {
        nota = 'C'
    } else if (nota < 90) {
        nota = 'B'
    } else {
        nota = 'A'
    }
    console.log(nota)
} else {
    console.log("[ERRO] Insira uma nota válida!")
}
 */
const notaMaxima = 100
const notaMinima = 0
const notaB = 90
const notaC = 80
const notaD = 70
const notaF = 60

function atribuirNota(nota) {
    if (nota <= notaMaxima && nota >= notaMinima) {
        if (nota < notaF) {
            return 'F'
        } else if (nota < notaD) {
            return 'D'
        } else if (nota < notaC) {
            return 'C'
        } else if (nota < notaB) {
            return 'B'
        } else {
            return 'A'
        }
    } else {
        return `[ERRO] NOTA INVÁLIDA! Insira uma nota entre ${notaMaxima} e ${notaMinima}`
    }
}

console.log(atribuirNota(-1));
