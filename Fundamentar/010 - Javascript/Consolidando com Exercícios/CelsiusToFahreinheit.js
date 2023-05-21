let valorInicial = '95'

function fahrenheitToCelsius(value) {
    valorInicial = Number(valorInicial)
    let valorEmCelsius = ((valorInicial - 32) * 5/9)
    return valorEmCelsius
}

function celciusToFahrenheit(value) {
    valorInicial = Number(valorInicial)
    let valorEmFahrenheit = (valorInicial * 9/5 + 32)
    return valorEmFahrenheit
}

console.log(`Valor em Celsius: ${fahrenheitToCelsius(valorInicial).toFixed(0)}°C`)
console.log(`Valor em Fahrenheit: ${celciusToFahrenheit(valorInicial).toFixed(0)}°F`)
