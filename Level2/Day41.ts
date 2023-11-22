function encontraUnico(arr: number[]) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i+= 2) {
        if (i + 1 >= arr.length || arr[i] !== arr[i + 1]) {
            return arr[i];
        }
       
    }
    return arr.join('')
}

console.log(encontraUnico([1,2,3,1,2]));//Saída: 3
console.log(encontraUnico([1,2,3,1,2, 3, 4]));//Saída: 4
console.log(encontraUnico([1,2,3,1,2, 3, 4, 4, 5]));//Saída: 5
console.log(encontraUnico([1,2,3,1,2, 3, 4, 4, 5, 5, 6]));//Saída: 6
console.log(encontraUnico([1,2,3,1,2, 3, 4, 4, 5, 5, 6, 6, 7]));//Saída: 7


