let sum = 0

function sumPairs(num: number): string {
    for (let n = 0; n <= num; n++) {
        let num = n
        num % 2 === 0 ? sum += num : num 
    }
   return `A soma dos numeros pares até ${num} é igual a ${sum}.`
}
console.log(sumPairs(1205))

