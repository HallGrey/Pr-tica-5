// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = Number(prompt("Qual a largura do terreno?"))
let comprimento = Number(prompt("Qual o comprimento do terreno?"))
let total = largura * comprimento

if (total < 100){
    document.write("Terreno Popular")
}else if (total >= 100 && total <= 500){
    document.write("Terreno Master")
}else if (total > 500){
    document.write("Terreno Vip")
}
