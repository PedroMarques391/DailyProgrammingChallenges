let bigNumber: number = 0;

const arrayNumbers: number[] = [1000, 566, 15, 5902, 458]

arrayNumbers.forEach((bigger) => {
    const A = bigger
    const B = bigNumber
    B > A ? bigNumber = B : bigNumber = A
})

console.log(bigNumber)


