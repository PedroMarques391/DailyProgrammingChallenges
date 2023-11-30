type Uvalues = Record<number, string>

function decimalToRoman (decimal: number) {
  const values: Uvalues = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  let res = ''
  for (
    const key of Object
      .keys(values)
      .map(Number)
      .sort((a, b) => b - a)
  ) {
    while (decimal >= key) {
      res += values[key]
      decimal -= key
    }
  }

  return res
}

console.log(decimalToRoman(58))// Saída: LVIII
console.log(decimalToRoman(60))// Saída: LX
console.log(decimalToRoman(120))// Saída: CXX
