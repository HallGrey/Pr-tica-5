// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let homem = 0;
let mulher = 0;
let continuar = "sim"

while (continuar === "sim"){
    let sexo = prompt("Qual o seu sexo?")
    let salario = Number(prompt("Qual o seu salário?"))

    if (sexo === "masculino"){
        homem = homem + salario
    }

    if (sexo === "feminino"){
        mulher = mulher + salario
    }

    continuar = prompt("Você deseja continuar?")
}

document.write(`O total de salário que os homens ganham é de R$${homem} e as mulheres é de R$${mulher}`)