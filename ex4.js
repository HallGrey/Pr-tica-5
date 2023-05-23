// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = prompt("Digite seu nome")
let sexo = prompt("Digite seu sexo")
let valorCompra = Number(prompt("Digite o valor da sua compra"))

if(sexo === "masculino"){
    let desconto = valorCompra*5/100
    total = valorCompra - desconto
}

if(sexo === "feminino"){
    let desconto = valorCompra*13/100
    total = valorCompra - desconto
}

document.write(`Olá, ${nome}, o valor da sua compra com o desconto ficou de R$${total}`)