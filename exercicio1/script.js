let nome = ''
let idade = 
console.log(typeof nome)
console.log(typeof idade)

// os dois ficariam indefinidos porém estava dando um erro e optei por adicionar aspas no nome e está dando como string

nome = 'Cristian'
idade = 32


console.log('Qual seu nome? ', nome)
console.log('Qual sua idade?', idade)

// Agora com os valores atribuidos mostrou corretamente

console.log('Olá', nome, 'voce tem', idade, 'anos')

// MANDANDO PERGUNTA COMO TEXTO
const respostaA = prompt('Voce gosta de música?')
const respostaB = prompt('Qual seu estilo preferido?')
const respostaC = prompt('Qual seu grupo preferido?')

/* MANDANDO PERGUNTA COMO VARIÁVEL
const perguntaA = 'Voce gosta de música?'
const perguntaB = 'Qual seu estilo preferido?'
const perguntaC = 'Qual seu grupo preferido?'

const respostaA = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = prompt(perguntaC)
*/

console.log ('Voce gosta de música?', respostaA)
console.log ('Qual seu estilo preferido?', respostaB)
console.log ('Qual seu grupo preferido?', respostaC)
