//Utilize a lista de filmes do exercício anterior e exiba no console cada um
//dos filmes informados usando um for tradicional.

let filmes = [];

for (let i = 1; i<=5; i++){
let nomesdefilmes = prompt("Diga o nome de um filme: ");
filmes.push(nomesdefilmes);
}
console.log(filmes);

for (let i = 1; i < filmes.length; i++){
    console.log(filmes[i]);
}
