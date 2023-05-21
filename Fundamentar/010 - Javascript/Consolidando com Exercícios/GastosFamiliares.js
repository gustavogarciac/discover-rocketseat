// Sistema de Gastos Familiares

/* let receitas = [1000, 230, 500]
let despesas = [1500, 210, 100]
let saldoReceitas = 0
let saldoDespesas = 0

for (let c = 0; c <=2; c++) {
    saldoReceitas += receitas[c]
    saldoDespesas += despesas[c] 
}
console.log(saldoReceitas)
console.log(saldoDespesas)
let saldoTotal = saldoReceitas - saldoDespesas
if (saldoTotal < 0) {
    console.log(`Infelizmente, a família está com saldo negativo, havendo, neste caso, uma diferença de R$${(saldoDespesas-saldoReceitas).toFixed(2)}`)
} else if (saldoTotal === 0) {
    console.log(`As receitas foram suficientes para cobrir as despesas, havendo nenhuma diferença entre receita e despesa.`)
} else {
    console.log(`As receitas foram suficientes para cobrir as despesas e ainda sobrou R$${saldoTotal.toFixed(2)}`)
} */

/* let family = {
    incomes: [1500, 1890, 750],
    expenses: [873, 3620, 90],
}
function calcularSaldo() {
    let sumIncomes = 0
    let sumExpenses = 0
    for (let c = 0; c < family.incomes.length; c++) {
        sumIncomes += family.incomes[c]
        sumExpenses += family.expenses[c]
    }
    let sumTotal = sumIncomes - sumExpenses
    return sumTotal
}

console.log(`A diferença entre as entradas e saídas foi de ${calcularSaldo()}`) */

let family = {
    incomes: [2700, 1890, 750],
    expenses: [873, 3620, 90],
}

function sum(array) {
    let total = 0
    
    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    if (calculateExpenses > calculateIncomes) {
        return console.log(`A família está com o saldo NEGATIVO e possui uma diferença de: R$${(calculateExpenses - calculateIncomes).toFixed(2)}`)
    } else {
        return console.log(`A família está com o saldo POSITIVO e possui uma diferença de R$${(calculateIncomes - calculateExpenses).toFixed(2)}`)
    }
}
calculateBalance()