function sort (numbers: number): string {
  const sortNumbers: number[] = []
  for (let i = 0; i < numbers; i++) {
    sortNumbers.push(Math.round(Math.random() * 100))
  };
  return sortNumbers.join(' ')
}

console.log(sort(6))
