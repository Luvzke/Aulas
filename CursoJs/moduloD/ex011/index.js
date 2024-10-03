var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório!')
}

var modelo = "Peogeot"
var valor = 20000
var compra = 'carro'
var modelos = {"Civic": 15000, "Peogeot": 20000, "Nissan": 80000}

if (valor < modelos[modelo]) {
    console.log('Compra não aprovada! go get some money bitch!!!')
} else {
    console.log(`Compra aprovada! brabo demais parabéns por adquirir o seu novo ${modelo} :)`)
}
