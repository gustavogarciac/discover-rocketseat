// SWITCH
// let expression = "a"
// switch (expression) {
//     case 'a':
//         console.log('A')
//         break
//     case 'b':
//         console.log('B')
//         break
//     case 'c':
//         console.log('C')
//         break
//     default:
//         console.log('None')
//         break
// }

function calc(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Indefinido.')
    }
    console.log(result)
}
calc(4, "", 8)