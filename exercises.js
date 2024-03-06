//Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = 'Joao';
let idade = 20;

console.log(`Olá meu nome é ${nome}, e eu tenho ${idade} anos`)

//Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");

num1 = Number(num1);
num2 = Number(num2);

console.log(`A soma é: ${num1 + num2}`)
console.log(`A subtração é: ${num1 - num2}`)
console.log(`A multiplicação é: ${num1 * num2}`)
console.log(`A divisão é: ${num1 / num2}`)

//Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

let userAge = prompt('Quantos anos você tem?');

userAge = Number(userAge);

if (userAge >= 18) {
    console.log('Você é maior de idade.');
}
else {
    console.log('Você é menor de idade.');
}

//Loops:Crie um loop que imprima todos os números de 1 a 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

function soma(a, b) {
    return a + b;
}

//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

let frutas = ['maçã', 'banana', 'laranja', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.

let livro = {
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    numPaginas: 176
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Número de Páginas: ${livro.numPaginas}`);

//Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.

document.getElementById('meuBotao').addEventListener('click', function() {
    alert('Você clicou no botão!');
});

//Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.

function primeiraLetraMaiuscula(frase) {
    return frase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(primeiraLetraMaiuscula('exemplo de frase')); // Saída: Exemplo De Frase

//Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao buscar dados:', error));
