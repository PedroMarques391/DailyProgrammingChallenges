let positive: number = 0;
let negative: number = 0;

function positivesNegatives(arr: number[]): string {
    arr.forEach(n => {
       n > 0 ? positive++ : negative++
    })
    return (
    `
    Números Positivos: ${positive}
    Números Negativos: ${negative}
    `
    )
}

const MyArray = [1, 2, 6, 9, 9, 45];

console.log(positivesNegatives(MyArray))