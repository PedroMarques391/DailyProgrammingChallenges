import * as readline from 'readline-sync'

function past () {
  console.log('...Viagem no tempo...')
  console.log('Você está no na Inglaterra na Era Votoriana.')
  console.log(
`1. Conhecer a Rainha Vitória. 
2. Explorar o local.`
  )
  const res: string = readline.question('Digite um numero: ')
  if (res === '1') {
    console.log('Você encontra com a Rainha e ela te faz perguntas sobre o futuro do reinado. O que você responde? ')
    console.log(
`1. Se esquiva da pergunta e pede pra ela contar um pouco sobre o periodo atual.
2. Conta tudo que ela queria saber.
              `)
    const res: string = readline.question('Digite outro numero: ')
    if (res === '1') {
      console.log('Tudo ocorre bem, a rainha gosta de você e te conta cada detalhe sobre o progresso pacífico que ela estava iniciando.')
    } else if (res === '2') {
      console.log('A rainha fica contente em saber que seu periodo de reinado ficou conhecido como Era Vitoriana e que foi importante em várias áreas, em especial nas econômica e política. Do ponto de vista econômico, pode-se elencar o desenvolvimento da indústria até seu auge; a expansão colonial para a África e Ásia; e a consolidação do Império Britânico.')
    } else {
      console.log('Digite apenas 1 ou 2.')
    }
  } else if (res === '2') {
    console.log('Você fica maravilhado e ao mesmo tempo pensativo...')
    console.log('No inicio você se depara com locomotivas a vapor, estações ferroviárias e trilhos de trem cortando a paisagem. As ferrovias tornaram o transporte mais rápido e acessível, encurtando as distâncias e conectando as cidades.')
    console.log('Ao ir para Londres você veria que a poluição do ar era um problema significativo. Você veria fumaça de chaminés e uma mistura de riqueza e pobreza, com bairros ricos e áreas superlotadas e insalubres.')
    console.log('Fim')
  }
}
past()
