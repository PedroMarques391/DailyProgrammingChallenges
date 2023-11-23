let mult: string
function multply (num: number) {
  for (let i = 0; i <= 10; i++) {
    mult = `${num} * ${i} = ${num * i}`
    console.log(mult)
  }
}
multply(8)
