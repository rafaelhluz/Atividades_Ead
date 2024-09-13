/*1. Criando um loop: Crie um loop for que imprima números de 0 a 10.
2. Loop com condição: Crie um loop for que imprima somente números
ímpares de 0 a 20.
3. Usando while: Crie um loop while que imprima números de 0 a 10.
4. Interrompendo um loop: Crie um loop for que imprima números de 0 a
100, mas interrompa a execução quando chegar ao número 50.
5. Pulando uma iteração: Crie um loop for que imprima números de 0 a
20, mas pule a impressão do número 13.
6. Iterando um Array: Crie um array de nomes e use um loop for...of
para imprimir cada nome do array*/

console.log("Exercício 1");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Exercício 2");
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Exercício 3");
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Exercício 4");
for (let i = 0; i <= 100; i++) {
    if (i === 50) {
        break;
    }
    console.log(i);
}

console.log("Exercício 5");
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}

console.log("Exercício 6");
const nomes = ['Ana', 'Carlos', 'Maria', 'João', 'Fernanda'];

for (const nome of nomes) {
    console.log(nome);
}
