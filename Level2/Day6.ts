function AscOrder (value1: string | number, value2: string | number, value3: string | number): string {
  if (typeof value1 === 'number' && typeof value2 === 'number' && typeof value3 === 'number') {
    const getValues = [value1, value2, value3]
    const sortedValues = getValues.sort((a, b) => a - b)
    return `${sortedValues.join(', ')}`
  } else {
    const phrase = `${value1}${value2}${value3}`
    return `As palavras ${value1}, ${value2}, ${value3} têm um total de ${phrase.length} letras`
  }
}

console.log(AscOrder('Anna', 'Anna', 'Muro'))
console.log(AscOrder(50, 96, 759))
