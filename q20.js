//Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a 
//primeira pessoa com idade maior que 18.
const pessoas = [
    {nome: 'Chris', idade: 19},
    {nome: 'Letícia', idade: 17},
    {nome: 'João Pedro', idade: 16},
    {nome: 'Gabriel', idade: 18}
]

const idademaior = pessoas.find((pessoa) => pessoa.idade>18);
console.log(idademaior)


