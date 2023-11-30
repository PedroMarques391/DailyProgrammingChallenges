function recursiveCalculator (num: number): number[] {
  return num === 0 ? [0] : [num, ...recursiveCalculator(num - 1)]
}

console.log(recursiveCalculator(5).join(', '))// Saída: 5, 4, 3, 2, 1, 0
console.log(recursiveCalculator(10).join(', '))// Saída: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
console.log(recursiveCalculator(15).join(', '))// Saída: 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
