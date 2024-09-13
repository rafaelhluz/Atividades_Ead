/*Exercícios práticos:
1. Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.
2. Função para Verificar Número Par: Faça uma função que recebe um
número e retorna true se for par e false se for ímpar.
3. Converter Polegadas em Centímetros: Escreva uma função que
converte polegadas em centímetros.
4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
retorna a mesma string em letras minúsculas.
6. Crie uma arrow function chamada multiplicaPorDez que recebe um
número como parâmetro e retorna o valor multiplicado por 10.*/

// Exercício 1
function calcArea(largura, altura) {
    return largura * altura;
}

let resultado = calcArea(5,5)
console.log("Área do retângulo = " + resultado);

// Exercício 2
function verificarPar(numero) {
    return numero % 2 === 0;
}

console.log(verificarPar(4));  
console.log(verificarPar(7));

// Exercício 3
function conversor(numero) {
    return numero * 2.54;
}

console.log(conversor(1))

// Exercício 4
function imc(peso, altura) {
    return peso / (altura * altura);
}

console.log(imc(95, 1.77));

// Exercicío 5
function converterParaMinusculas(texto) {
    return texto.toLowerCase();
}

const textoOriginal = "RAFA";
const textoMinusculas = converterParaMinusculas(textoOriginal);
console.log(textoMinusculas);

// Exercicío 6
const multiplicaPorDez = numero => numero * 10;

console.log(multiplicaPorDez(5)); 
console.log(multiplicaPorDez(12));