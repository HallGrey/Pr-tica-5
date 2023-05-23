// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let alunos = 0
let totalIdade = 0
let i = true
do {
let idade = Number(prompt('digite a idade'))
totalIdade += idade
alunos++
if(totalIdade >= 999) {
 i = false
}
} while(i)

document.write(`Existem ${alunos} alunos e a média é ${totalIdade / alunos}`)