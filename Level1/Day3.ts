type Uarr = number[] | string[]

const arr: Uarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function reverseArray (): Uarr {
  const reverse: Uarr = arr.reverse()
  return reverse
}

console.log(reverseArray())
