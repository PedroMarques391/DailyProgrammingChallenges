interface UsedNote {
  value: number
  amount: number
}

function change (payment: number, total: number): string {
  const bankNotes: number[] = [100, 50, 20, 10, 5, 2, 1]
  let change = payment - total

  if (change === 0) {
    return 'Troco: R$0.'
  } else {
    const usedNotes: UsedNote[] = []
    for (const bankNote of bankNotes) {
      const amount = Math.floor(change / bankNote)
      amount > 0 &&
            usedNotes.push({ value: bankNote, amount })
      change -= amount * bankNote
    }
    const finalChange = usedNotes.map(({ value, amount }) =>
        `${amount} nota${amount > 1 ? 's' : ''} de R$${value.toFixed(2)}`).join(', ')

    return `Troco: R$${(payment - total).toFixed(2)}. ${finalChange}`
  }
}

console.log(change(25, 10))// Saída: Troco: R$15.00. 1 nota de R$10.00, 1 nota de R$5.00
console.log(change(30, 10))// Saída: Troco: R$20.00. 1 nota de R$20.00
console.log(change(100, 14))// Saída: Troco: R$86.00. 1 nota de R$50.00, 1 nota de R$20.00, 1 nota de R$10.00, 1 nota de R$5.00, 1 nota de R$1.00
console.log(change(100, 50))// Saída: Troco: R$50.00. 1 nota de R$50.00
