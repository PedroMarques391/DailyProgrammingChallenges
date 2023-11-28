function imc (weight: number, height: number): string {
  const imc: number = weight / (height * height)
  return `IMC: ${imc.toFixed(2)}`
}

console.log(imc(70, 1.75))// Saída: IMC: 22.86
console.log(imc(85, 1.80))// Saída: IMC: 26.23
console.log(imc(100, 1.75))// Saída: IMC: 32.65
