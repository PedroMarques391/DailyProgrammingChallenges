type Unotes = Record<string, string>

const notas: Unotes = {
  cebola: 'Dó',
  alho: 'Ré',
  pimenta: 'Ré',
  tomate: 'Mi',
  sal: 'Fa',
  ovo: 'Sol',
  salsa: 'Lá',
  azeite: 'Si'
}
const notasArray: string[] = []
function getNotes (arr: string[]): string {
  arr.forEach((n: string) => {
    if (notas[n]) {
      notasArray.push(notas[n])
    } else {
      throw new Error(`Chave não encontrada: ${n}`)
    }
  })
  return `A sequência de notas musicais é ${notasArray}`
}

console.log(getNotes(['alho', 'cebola', 'ovo']))
