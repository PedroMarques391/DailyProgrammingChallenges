function numericalPalindrome (num: number): string {
  const numToSplit = num.toString()
  const isPalidrome: string =
  numToSplit.split('').join('') ===
  numToSplit.split('').reverse().join('')
    ? 'É Palíndromo'
    : 'Não é Palíndromo'
  return isPalidrome
}

console.log(numericalPalindrome(12321))// Saída: É Palíndromo
console.log(numericalPalindrome(12345))// Saída: Não é Palíndromo
console.log(numericalPalindrome(123454321))// Saída: É Palíndromo
