let totalVowels: number = 0
const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'á', 'ã', 'é', 'í', 'ú', 'ô', 'ê']

function countWord (word: string): string {
  for (let i: number = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      totalVowels++
    }
  }
  return `O número de vogais é ${totalVowels}.`
}
console.log(countWord('Programação'))
