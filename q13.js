//Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um array. 
//Em seguida, exiba no console os filmes informados.

let filmes = [];

for (let i = 0; i<=5; i++){
let nomesdefilmes = prompt("Diga o nome de um filme: ")
filmes.push(nomesdefilmes);
console.log(filmes);
}