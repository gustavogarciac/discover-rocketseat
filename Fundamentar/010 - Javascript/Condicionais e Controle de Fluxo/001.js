// Control Flow 

// console.log('A')
// console.log('B')

var temperatura = 39
var highTemperature = temperatura >= 37.5
var medTemperature = temperatura > 37

if (highTemperature) {
    console.log('Febre Alta')
} else if(medTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável.')
}