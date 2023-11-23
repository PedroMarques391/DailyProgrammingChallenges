type Uwords = Record<string, number>

const thePhrase: string = 'O sol viu o sol e a lua viu a lua a o'

function countWords (phrase: string): Uwords {
  const thePhraseArray: string[] = phrase.toLowerCase().split(' ')

  const appearances: Uwords = thePhraseArray.reduce((count: Uwords, word: string) => {
    count[word] = (count[word] || 0) + 1
    return count
  }, {})
  return appearances
}

console.log(countWords(thePhrase))
