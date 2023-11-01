function valueInclude(value: number | string): string {
    const myArray: (number | string)[] = [10, 20, "Anna"]
    if (myArray.includes(value)) {
        return `O valor ${value} está incluso no array.`
    } 
    return `O valor ${value} não está incluso.`
}

console.log(valueInclude('Anna'))
console.log(valueInclude(156))