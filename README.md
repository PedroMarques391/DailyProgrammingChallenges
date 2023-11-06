# Desafios Diários - [@codandonagringa](https://www.instagram.com/codandonagringa/)

Este repositório é dedicado ao registro de todos os desafios diários propostos por [@codandonagringa](https://www.instagram.com/codandonagringa/). O projeto é altamente interessante, pois permite a prática de vários conceitos de programação.

## Tecnologia Utilizada
Todos os desafios foram implementados em TypeScript, mas podem ser realizados com qualquer outra tecnologia.

## Níveis de Dificuldade
Os desafios são classificados em cinco níveis de dificuldade, que são indicados na introdução de cada desafio. Cada nível está organizado em pastas separadas e os arquivos são nomeados de acordo com cada dia.

## Execução do Código
Foi utilizado o `ts-node-dev` para executar o TypeScript diretamente no Node.js, eliminando a necessidade de transpilar o código para JavaScript.

Lembre-se de conferir o código-fonte e os desafios neste repositório e participar ativamente!

## Desafios Diários - Menu de Navegação

- [1° Dia (10/10) - Tamanho da String](#1)
- [2° Dia (11/10) - Transformar em Grito](#2)
- [3° Dia (12/10) - Inverter Array](#3)
- [4° Dia (13/10) - Média das Notas](#4)
- [5° Dia (14/10) - Condição if/else](#5)
- [6° Dia (15/10) - Ordem Crescente](#6)
- [7° Dia (16/10) - Função](#7)
- [8° Dia (17/10) - Verificar se Array contém um número específico](#8)
- [9° Dia (18/10) - Estrutura Hash](#9)
- [10° Dia (19/10) - Mudar o valor de uma chave do Hash](#10)
- [11° Dia (20/10) - Transformar Array em Hash](#11)
- [12° Dia (21/10) - Soma dos Números Pares](#12)
- [13° Dia (22/10) - Tabuada de Multiplicação](#13)
- [14° Dia (23/10) - Encontre o Maior Elemento no Array](#14)
- [15° Dia (24/10) - Soma dos Dígitos](#15)
- [16° Dia (25/10) - Contagem de Vogais](#16)
- [17° Dia (26/10) - Contagem de Números Positivos e Negativos](#17)
- [18° Dia (27/10) - Gerador de Senhas Aleatórias](#18)
- [19° Dia (28/10) - Sequência Espelho](#19)
- [20° Dia (29/10) - Contador de Vezes](#20)
- [21° Dia (30/10) - Validador de Senha](#21)
- [22° Dia (31/10) - Gerador de Frases](#22)
- [23° Dia (01/11) - Verificador de Anagramas](#23)
- [24° Dia (02/11) - Máquina do Tempo](#24)
<<<<<<< HEAD
- [25° Dia (03/11) - Máquina do Tempo](#25)
- [26° dia (04/11) - Playlist Personalizada](#26)
- [27° dia (05/11) - Média de temperatura, temperatura mais alta e mais baixa.](#27)
=======
- [25° Dia (03/11) - A Cozinha Musical](#25)
>>>>>>> 07c4d73f1f48b9650274cdd1f9625a5ef1db3bec


## Desafios
<a name="1"></a>

## [1° Dia (10/10) - Tamanho da String](#1) 
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
Dada uma String qualquer, você deve imprimir na tela a quantidade de caracteres que essa String possui.

### Exemplo de Entrada
"Olá, tudo bem?"

### Exemplo de Saída
14
<a name="2"></a>

## [2° Dia (11/10) - Transformar em Grito](#2)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
Você deve receber o nome do usuário como entrada e imprimir o nome do usuário com todas as letras em maiúsculo.

### Exemplo de Entrada
"TypeScript"

### Exemplo de Saída
TYPESCRIPT
<a name="3"></a>

## [3° Dia (12/10) - Inverter Array](#3)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
Hoje vamos falar sobre Arrays! Um array é um conjunto de dados, e neste terceiro dia do desafio, estamos lidando com um conjunto de números inteiros. 
O desafio consiste em inverter um array de números inteiros e, em seguida, imprimir os números invertidos. Você deve usar um método já existente para realizar a inversão.

### Exemplo de Entrada
[2, 1, 3, 2]

### Exemplo de Saída
[2, 3, 1, 2]
<a name="4"></a>

## [4° Dia (13/10) - Média das Notas](#4)
Vocês já ouviram falar sobre Float? Float nada mais é que um número com vírgula -> 1,5 / 2,5 / 5,5...

Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O desafio consiste em pedir ao usuário para inserir 3 notas (P1, P2 e P3), somar essas notas e, em seguida, imprimir a média da pessoa. A média é calculada como a soma das 3 notas dividida por 3.

### Exemplo de Entrada
P1 = 3.5

P2 = 4.5

P3 = 8.0

### Exemplo de Saída
A média é: 6.0
<a name="5"></a>

## [5° Dia (14/10) - Condição if/else](#5)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é criar qualquer programa que declare uma variável e utilize a estrutura de condição if-else. Você tem a liberdade de escolher como deseja implementar essa condição.

### Exemplo de Entrada
a = 2

### Exemplo de Uso
```typescript
if (a: number > 2) {
  console.log("é maior que 2");
} else {
  console.log("é menor que 2");
}
```
<a name="6"></a>

## [6° Dia (15/10) - Ordem Crescente](#6)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é receber 3 valores (números inteiros) do usuário e imprimir esses valores em ordem crescente.

### Exemplo de Entrada
a = 3

b = 10

c = 5

### Exemplo de Saída
3, 5, 10
<a name="7"></a>

## [7° Dia (16/10) - Função](#7)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
Você deve criar uma função que recebe dois parâmetros, nome e idade, e imprime esses valores no formato: "nome, idade". É necessário usar uma função para realizar o exercício.

### Exemplo de Entrada
nome = "Breach"

idade = 45

### Exemplo de Saída
Breach, 45
<a name="8"></a>

## [8° Dia (17/10) - Verificar se Array contém um número específico](#8)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é escrever um programa que verifique se um array contém o número informado.

### Exemplo de Entrada
array = [1, 2, 'teste']

numero = 4

### Exemplo de Saída
Não tem o número 4
<a name="9"></a>

## [9° Dia  (18/10) - Estrutura Hash](#9)
Hoje vamos falar de uma estrutura chamada Hash, HashMap, Dicionário, etc.. (o nome varia de linguagem pra linguagem), essa estrutura é basicamente um agrupamento de chave e valor. Por exemplo, o hash { nome: 'Jett', idade: 19 } contém as chaves nome e idade com seus respectivos valores.

Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é escrever um programa que imprima os valores e as chaves de um hash.

### Exemplo de Entrada
{ nome: 'Jett', idade: 19 }

### Exemplo de Saída
Nome é Jett

Idade é 19
<a name="10"></a>

## [10° Dia (19/10) - Mudar o valor de uma chave do Hash](#10)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é escrever um programa que transforme o valor da chave “profissao” de um hash em “Programador”.

### Exemplo de Entrada
{ nome: 'Michael', idade: 40, profissao: 'Gerente' }

### Exemplo de Saída
{ nome: 'Michael', idade: 40, profissao: 'Programador' }
<a name="11"></a>

## [11° Dia (20/10) - Transformar Array em Hash](#11)
Dificuldade: ⭐⭐⭐☆☆

### Descrição do Problema
O objetivo é escrever um programa que transforme um array (disposto na sequência chave e valor) em uma estrutura de hash.

### Exemplo de Entrada
Array
["nome", "corretora abc", "tipo", "empresa", "negocio", "aluguel e vendas"]
### Exemplo de Saída
Hash
{ nome: "corretora abc", tipo: "empresa", negocio: "aluguel e vendas" }
<a name="12"></a>

## [12° Dia (21/10) - Soma dos Números Pares](#12)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é escrever um programa que solicite ao usuário um número inteiro positivo e calcule a soma de todos os números pares menores ou iguais a esse número.

### Exemplo de Entrada
Digite um número inteiro positivo: 10

### Exemplo de Saída
A soma dos números pares até 10 é 30.
<a name="13"></a>

## [13° Dia (22/10) - Tabuada de Multiplicação](#13)
Dificuldade: ⭐☆☆☆☆

### Descrição do Problema
O objetivo é criar um programa que solicita ao usuário um número inteiro e gera a tabuada de multiplicação desse número até 10, exibindo-a na tela.

### Exemplo de Entrada
Digite um número inteiro positivo: 8

### Exemplo de Saída
8x1 = 8

8x2 = 16

8x3 = 24

....

8x10 = 80
<a name="14"></a>

## [14° Dia (23/10) - Encontre o Maior Elemento no Array](#14)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é descobrir o maior elemento em um array de inteiros.

### Exemplo de Entrada
[3, 7, 2, 8, 9, 4]

### Exemplo de Saída
O maior número é 9
<a name="15"></a>

## [15° Dia (24/10) - Soma dos Dígitos](#15)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é calcular a soma dos dígitos de um número inteiro.

### Exemplo de Entrada
12345

### Exemplo de Saída
A soma dos dígitos é 15
<a name="16"></a>

## [16° Dia (25/10) - Contagem de Vogais](#16)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é contar quantas vogais (inclusive com acentuações) existem em uma string.

### Exemplo de Entrada
"programação"

### Exemplo de Saída
Existem 5 vogais na string
<a name="17"></a>

## [17° Dia (26/10) - Contagem de Números Positivos e Negativos](#17)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é contar quantos números positivos e negativos existem em um array de inteiros.

### Exemplo de Entrada
[-2, 5, -6, 8, 0, -1, 3]

### Exemplo de Saída
Positivos: 4

Negativos: 3
<a name="18"></a>

## [18° Dia (27/10) - Gerador de Senhas Aleatórias](#18)
Dificuldade: ⭐⭐⭐☆☆

### Descrição do Problema
O objetivo é criar um programa que gere senhas aleatórias de 8 caracteres, combinando letras maiúsculas, minúsculas e números.

### Exemplo de Saída
A senha gerada é: A2bF9zP7
<a name="19"></a>

## [19° Dia (28/10) - Sequência Espelho](#19)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é criar um programa que gere uma sequência espelho. Dada uma sequência de números, o programa deve criar uma nova sequência que seja a sequência original seguida da mesma sequência em ordem inversa.

### Exemplo de Entrada
[1, 2, 3]

### Exemplo de Saída
[1, 2, 3, 3, 2, 1]
<a name="20"></a>

## [20° Dia (29/10) - Contador de Vezes](#20)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é criar um programa que conte quantas vezes uma letra específica aparece em uma frase.

### Exemplo de Entrada
"Felizmente, funciona."

Letra: 'a'

### Exemplo de Saída
4
<a name="21"></a>

## [21° Dia (30/10) - Validador de Senha](#21)
Dificuldade: ⭐⭐⭐☆☆

### Descrição do Problema
O objetivo é criar um programa que valide senhas com os seguintes critérios: pelo menos 8 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minúscula e pelo menos um número.

### Exemplo de Entrada
"Seguranca123"

### Exemplo de Saída
Senha válida
<a name="22"></a>

## [22° Dia (31/10) - Gerador de Frases](#22)
Dificuldade: ⭐⭐⭐☆☆

### Descrição do Problema
O objetivo é criar um programa que gere frases aleatórias combinando palavras de diferentes categorias.

### Exemplo de Entrada
(Sem Entrada)

### Exemplo de Saída
"O gato preto saltou sobre o muro."

Neste desafio, você estará criando um gerador de frases aleatórias, combinando palavras de diferentes categorias. Para fazer isso, você pode criar arrays para diferentes categorias de palavras, como "animais" e "cores". Por exemplo:

```typescript
const animais = ["gato", "cachorro", "porco-espinho"];
const cores = ["vermelho", "preto", "azul"];
```
<a name="23"></a>

## [23° Dia (01/11) - Verificador de Anagramas](#23)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
O objetivo é criar um programa que verifique se duas palavras são anagramas, ou seja, se têm as mesmas letras em ordens diferentes.

### Exemplo de Entrada
Palavra 1: "amor"

Palavra 2: "roma"

### Exemplo de Saída
São anagramas!

<a name="24"></a>

## [24° dia (02/11) - Máquina do Tempo](#24)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
Crie um programa que simule uma máquina do tempo, onde o usuário pode viajar para diferentes períodos históricos e interagir com o ambiente.

### Exemplo de Entrada
(Sem entrada)

### Exemplo de Saída
```Viagem no Tempo:

Você está no Egito Antigo. O que você deseja fazer?

1. Conhecer os faraós.
2. Explorar as pirâmides.

Digite o número da sua escolha: 1

Você se encontra com o Faraó Ramsés II. Ele lhe faz perguntas sobre o futuro...
```

<a name="25"></a>

## [25° dia (03/11) - A Cozinha Musical](#25)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
Crie um programa que simule uma cozinha onde cada ingrediente adicionado à receita gera uma nota musical. Por exemplo: adicionar "Tomate" toca um "Dó", "Cebola" toca um "Ré", etc.

### Exemplo de Entrada
``Lista de ingredientes (por exemplo, ["Tomate", "Cebola", "Alho"]).``

### Exemplo de Saída
``Uma sequência de notas musicais (por exemplo, "Dó, Ré, Mi").``
<<<<<<< HEAD

<a name="26"></a>

## [26° dia (04/11) - Playlist Personalizada](#26)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
Crie um programa que permite ao usuário construir uma playlist de músicas. Utilize um array para armazenar as músicas, e loops para permitir que o usuário adicione, remova, ou visualize a playlist.

### Exemplo de Entrada
``Ações como "Adicionar", "Remover", "Visualizar", os nomes das músicas.``

### Exemplo de Saída
``Lista atualizada da playlist.``

<a name="27"></a>

## [27° dia (05/11) -  Monitoramento de Temperatura Ambiental](#27)
Dificuldade: ⭐⭐☆☆☆

### Descrição do Problema
Desenvolva um programa que monitora a temperatura de uma sala ao longo do dia. Armazene as leituras de temperatura em um array e use loops para calcular a média, a temperatura mais alta e a mais baixa.

### Exemplo de Entrada
``Temperaturas registradas ao longo do dia, exemplo: [27.6, 32.3, 29.5]``

### Exemplo de Saída
``Média de temperatura, temperatura mais alta e mais baixa.``
=======
>>>>>>> 07c4d73f1f48b9650274cdd1f9625a5ef1db3bec
