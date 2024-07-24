//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for..of.
let filmes = [];

for (let i = 0; i<5; i++){
let nomesdefilmes = prompt("Diga o nome de um filme: ");
filmes.push(nomesdefilmes);
}
console.log(filmes);

/*for (let i = 1; i < filmes.length; i++){
    console.log(filmes[i]);
}*/

for (const elementos of filmes) {
    console.log(elementos)
}