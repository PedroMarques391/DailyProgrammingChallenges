function masterOfTime (startTime: string, endTime: string): string {
  const start: Date = new Date(startTime)
  const end: Date = new Date(endTime)

  const diference: number = Math.abs(Number(end) - Number(start)) / 1000

  const reuse = 60 * 60

  const years = Math.floor(diference / (365 * 24 * reuse))
  const months = Math.floor((diference % (365 * 24 * reuse)) / (30 * 24 * reuse))
  const days = Math.floor((diference % (30 * 24 * reuse)) / (24 * reuse))
  const hours = Math.floor((diference % (24 * reuse)) / (reuse))
  const minutes = Math.floor((diference % (reuse)) / 60)
  const seconds = Math.floor(diference % 60)

  return `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`
}

console.log(masterOfTime('2020-01-01 14:00:00', '2023-03-15 12:30:30'))
// Saída:3 anos, 2 meses, 28 dias, 22 horas, 30 minutos e 30 segundos
console.log(masterOfTime('2010-01-01 14:00:00', '2033-03-15 12:30:30'))
// Saída:23 anos, 2 meses, 13 dias, 23 horas, 30 minutos e 30 segundos
console.log(masterOfTime('2015-01-01 14:00:00', '2040-12-19 07:30:00'))
// Saída: 25 anos, 11 meses, 3 dias, 18 horas, 30 minutos e 0 segundos
console.log(masterOfTime('2001-01-01 14:00:00', '2023-07-29 05:50:30'))
// Saída: 22 anos, 7 meses, 23 dias, 16 horas, 50 minutos e 30 segundos
