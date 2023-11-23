let soma: number = 0
let numero: number = 12345

while (numero > 0) {
  soma += numero % 10
  numero = Math.floor(numero / 10)
}

console.log(soma)
