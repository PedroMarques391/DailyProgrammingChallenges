let password: string = ''
function randomPassword (): string {
  const passWordIndices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*+'
  while (password.length < 8) {
    const letterIndice = Math.floor(Math.random() * passWordIndices.length)
    password += passWordIndices[letterIndice]
  }
  return `Sua senha é ${password}`
}
console.log(randomPassword())
