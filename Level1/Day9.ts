interface Udict {
  name: string
  age: number
  occupation: string
}

const dict: Udict | any = {
  name: 'Leonardo',
  age: 19,
  occupation: 'Técnico Agrícola'

}

for (const key in dict) {
  console.log(`${key} é ${dict[key]}`)
}
