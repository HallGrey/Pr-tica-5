// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distancia = Number(prompt("Que distância pretende percorrer?"))
let valor = 0;

if (distancia <= 200){
    valor = distancia * 0.50
    document.write(`O valor da passagem é de R$${valor}`)
}else{
    valor = distancia * 0.45
    document.write(`O valor da passagem é de R$${valor}`)
}

