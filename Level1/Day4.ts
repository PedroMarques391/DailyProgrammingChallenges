function average (note1: number, note2: number, note3: number): string {
  const finalAverage: number = ((note1 + note2 + note3) / 3)
  return `A nota final é ${finalAverage.toFixed(2)}`
}

console.log(average(3.5, 4.5, 8.0))
