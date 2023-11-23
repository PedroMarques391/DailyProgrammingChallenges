function validaSenha (senhaU: string): string {
  const senha = 'MinhaSenha1555'
  switch (true) {
    case senhaU.length < 8:
      return 'A senha precisa ter mais de 8 caracteres.'
    case !/[A-Z]/.test(senhaU):
      return 'A senha precisa ter pelo menos uma letra maiúscula.'
    case !/[0-9]/.test(senhaU):
      return 'A senha precisa ter pelo menos um número.'
    case senhaU === senha:
      return 'Senha correta, Seja bem vindo!'
    default:
      return 'Senha Incorreta'
  }
}

console.log(validaSenha('MinhaSenha1555'))
