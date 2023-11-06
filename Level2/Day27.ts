
const temperatures: number[] = [27.5, 28.0, 35.5, 15.0, 19.4, 10.5]

function averageTemp(arr: number[]): string {
    const some = arr.reduce((total, number) => total + number, 0) 
    const average = (some / arr.length).toFixed(1)
    return `A média é ${average}`
}

function minTemp(arr: number[]): string {
    const min = Math.min(...arr).toFixed(1)
    return `A menor temperatura é ${min}`
}

function maxTemp(arr: number[]): string {
    const max = Math.max(...arr).toFixed(1)
    return `A maior temperatura é ${max}`
}

function showAll() {
    console.log(averageTemp(temperatures))
    console.log(minTemp(temperatures))
    console.log(maxTemp(temperatures))
}

showAll()

