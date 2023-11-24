function coinToss (releases: number): string {
  let crown: number = 0
  let face: number = 0
  for (let i = 1; i <= releases; i++) {
    Math.floor(Math.random() * 2) === 1 ? crown++ : face++
  }
  return `Cara: ${face}, Coroa: ${crown}`
}
console.log(coinToss(10))// Saída: Cara: 3, Coroa: 7
console.log(coinToss(15))// Saída: Cara: 6, Coroa: 9
console.log(coinToss(20))// Saída: Cara: 9, Coroa: 11
console.log(coinToss(25))// Saída: Cara: 15, Coroa: 10
