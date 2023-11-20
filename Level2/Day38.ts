function fibonacciSequence(number: number): string {
    const fibonacci: number[] = [0, 1];

    for(let i = 0; i < number - 2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    
    return fibonacci.join(', ') 
}

console.log(fibonacciSequence(5)) //Saída: 0, 1, 1, 2, 3
console.log(fibonacciSequence(15)) //Saída: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
console.log(fibonacciSequence(20)) //Saída: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
