const products: (string | number)[] = ["Camisa", 10.99, "Calça", 100, "Celular", 5.000, "Sapato", 4599]
const myDict: any = {}
if (products.length % 2 !== 0) {
    console.log("O array precisar ser par.")
} else {
    for (let i = 0; i < products.length; i += 2) {
    const key = products[i];
    const value = products[i + 1]
    myDict[key] = value
   
   
}
 console.log(myDict)
} 

