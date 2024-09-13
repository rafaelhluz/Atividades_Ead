/*Exercícios com condicionais
1) Classificação por Idade: Escreva um programa que classifica uma pessoa
em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
estrutura if/else/else if.
2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
switch para verificar a escolha e imprimir se acertou ou não.
3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
ou 'Aprovado' (mais de 7). Use switch.*/

// Exercício 1
let idade = 65;

if (idade < 13) {
    console.log("Você é criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é adolescente.");
} else if (idade >= 18 && idade <= 64) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso");
}

// Exercício 2
let numAleatorio = 3;

switch (numAleatorio) {
    case 1:
        console.log("Você errou.");
        break;

    case 2:
        console.log("Você errou.");
        break;

    case 3:
        console.log("Parabéns, você acertou!");
        break;

    case 4:
        console.log("Você errou.");
        break;

    case 5:
        console.log("Você errou.");
        break;
}

// Exercício 3
let nota = 8;

if (nota < 6) {
    console.log("Você reprovou.");
} else if (nota >= 6 && nota <= 7) {
    console.log("Você está de recuperação.");
} else {
    console.log("Parabéns, você foi aprovado!")
}