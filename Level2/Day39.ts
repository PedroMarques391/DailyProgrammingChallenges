type UmorseCode = Record<string, string>

const morseCodeTab: UmorseCode = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-.-.-': '.',
  '--..--': ',',
  '---...': ':',
  '..--..': '?',
  '-.-.--': '!',
  '-....-': '-',
  '-..-.': '/',
  '.--.-.': '@',
  '/': ' '
}

function morse (morseCode: string): string {
  const morseCodeArray = morseCode.split(' ')
  const morseCodeDeciphered = morseCodeArray.map(letter => morseCodeTab[letter]).join('')
  return morseCodeDeciphered
}

console.log(morse('... --- ...'))// Saída: SOS
console.log(morse('-... --- -- / -.. .. .-'))// Saída: BOM DIA
console.log(morse('--.- ..- .- .-.. / ... . ..- / -. --- -- . ..--..'))// Saída: QUAL SEU NOME?
