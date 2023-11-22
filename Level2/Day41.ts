function uniqueNumber(numArray: number[]) {
    numArray.sort((a, b) => a - b);
    for (let i = 0; i < numArray.length; i+= 2) {
        if (numArray[i] !== numArray[i + 1]) {
            return numArray[i];
        }
       
    }
    return numArray.join('')
}

console.log(uniqueNumber([1, 2, 3, 1, 2]));//Saída: 3
console.log(uniqueNumber([1, 2, 3, 1, 2, 3, 4]));//Saída: 4
console.log(uniqueNumber([1, 2, 3, 1, 2, 3, 4, 4, 5]));//Saída: 5
console.log(uniqueNumber([1, 2, 3, 1, 2, 3, 4, 4, 5, 5, 6]));//Saída: 6
console.log(uniqueNumber([1, 2, 3, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7]));//Saída: 7
console.log(uniqueNumber([1, 2, 3, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7]));//Saída: 7
console.log(uniqueNumber([2, 4, 6, 16, 18, 20, 6, 8, 10, 12, 14, 8, 10, 12, 14, 16, 18, 20, 2]));//Saída: 4



