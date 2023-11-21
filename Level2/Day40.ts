function factorial(fac: number): number {
    const factorialArray: number[] = Array.from({length: fac}, (_, i) => i + 1);
    const factorialResult: number = factorialArray.reduce((current, total) => 
    current * total, factorialArray[0]);
    
    return factorialResult
}

console.log(factorial(6));//Saída: 720
console.log(factorial(7));//Saída: 5040
console.log(factorial(8));//Saída: 40320
console.log(factorial(9));//Saída: 362880
console.log(factorial(10));//Saída: 3628800
