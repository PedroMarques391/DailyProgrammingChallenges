const binCode: string = '01000010 01101001 01101110 01100001 01110010 01111001'

function binaryToText (binary: string) {
  const binCodeArray: string[] = binary.split(' ')
  let text: string = ''
  binCodeArray.forEach((code) => {
    const binaryToDecimal: number = parseInt(code, 2)
    const decimalToASCII = String.fromCharCode(binaryToDecimal)
    text += decimalToASCII
  })
  return text
}
console.log(binaryToText(binCode))
