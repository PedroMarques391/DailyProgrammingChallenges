const codedMessage: string = 'Khoor Zruog'
const keys: number = 3

function decrypt (coded: string, keys: number): string {
  let decodedWord: string = ''
  for (let i = 0; i < codedMessage.length; i++) {
    const ASCIInumber: number =
        coded.charCodeAt(i) === 32
          ? coded.charCodeAt(i)
          : coded.charCodeAt(i) - keys
    decodedWord += String.fromCharCode(ASCIInumber)
  }
  return decodedWord
};

console.log(decrypt(codedMessage, keys))
