function isAnagram(word1: string, word2: string): string {
    const word1ArrayinReverse = word1.toLowerCase().split('').reverse().join('');
    const word2Array = word2.toLowerCase().split('').join('')
    if (word1ArrayinReverse === word2Array) {
        return `A palavra ${word1.toLowerCase()} é um anagrama de ${word2.toLowerCase()}`;
        
    } else {
        return `A palavra ${word1.toLowerCase()} não é um anagrama de ${word2.toLowerCase()}`;
        
    }
}
console.log(isAnagram('Roma','amorr'))