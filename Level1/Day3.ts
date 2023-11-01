type arr = number[] | string[]

const arr: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 


function reverseArray():arr {
    const reverse: arr = arr.reverse()
    return reverse
}

console.log(reverseArray())
