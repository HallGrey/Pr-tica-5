// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let inicial = Number(prompt("Digite um valor inicial"))
let final = Number(prompt("Digite um valor final"))
let incremento = Number(prompt("Digite um valor de incremento"))

for (let contagem = inicial; contagem <= final; contagem += incremento){
    document.write(` ${contagem} `)
}

document.write(" Acabou!")