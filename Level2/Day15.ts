let soma = 0 
let numero = 12345;

while (numero > 0) {
    soma += numero % 10
    numero = Math.floor(numero / 10)
}

console.log(soma)


