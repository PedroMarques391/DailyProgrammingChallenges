import * as readline from 'readline-sync'

let attempts = 0

function guessingGame (): void {
  const ramdonNum: number = Math.ceil(Math.random() * 100)
  let userInput: number = parseInt(readline.question('Advinhe o numero de 1 a 100: '))
  while (userInput !== ramdonNum) {
    attempts++
    if (userInput > 100) {
      console.log('O valor precisar ser menor ou igual a 100.')
      userInput = parseInt(readline.question('Advinhe o numero de 1 a 100: '))
    } else if (userInput < ramdonNum) {
      console.log('O valor é maior. tente novamente.')
      userInput = parseInt(readline.question('Advinhe o numero de 1 a 100: '))
    } else if (userInput > ramdonNum) {
      console.log('O valor é menor. Tente novamente.')
      userInput = parseInt(readline.question('Advinhe o numero de 1 a 100: '))
    }
  }

  console.log(`Parabéns, você adivinhou em ${attempts + 1} tentativa(s). O numero escolhido foi: ${ramdonNum}`)
};

guessingGame()
