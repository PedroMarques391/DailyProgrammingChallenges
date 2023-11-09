import * as readline from 'readline-sync';

const list: string[] = []

function makeList(): string {
    let res: string = ''
        while (res !== 'sair') {
            res = readline.question("Digite o nome dos itens, ou 'sair' para encerrar: ").toLocaleLowerCase()
            list.push(res)
        }
        list.pop()
        return `Sua lista de compras: ${list.join(', ')}`
}

console.log(makeList())