const word: string = "Funcionou".toUpperCase();


function countLetters (letter: string): string {
    const wordArray: string[] = word.split('');
    const letters: string = letter.toUpperCase()
    let count: number = 0;
    if(wordArray.includes(letters)) {
        for (let n in wordArray) {
            wordArray[n] === letters ? count ++ : count
        }
    }
    return `A palavra "${word}" tem um total de ${count} letras "${letters}".`
}
console.log(countLetters('n'))