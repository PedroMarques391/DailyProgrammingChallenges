function isString (word: string | number | boolean): string {
  if (typeof (word) === 'string') {
    return 'A palavra é uma string'
  } else {
    return `A palavra é do tipo ${typeof (word)}`
  }
}

console.log(isString('Essa é uma palavra.'))
console.log(isString(458))
console.log(isString(true))
