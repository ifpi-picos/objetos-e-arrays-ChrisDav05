// Q.1 - Crie um objeto para representar um aluno, incluindo propriedades como nome, idade, curso e notas. 
// Popule o objeto com valores e imprima os dados do aluno.
const aluno = {
    nome: "Christian",
    idade: "18",
    curso: "ADS",
    notas: "10, 10, 9"
};

console.log(aluno)

//Q.2 - Crie um objeto carro com as propriedades marca, modelo e ano. Em seguida, imprima a marca do carro.
const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: "2023"
}

console.log(carro.marca);

//Q.3 - Crie um objeto livro com as propriedades titulo, autor e anoPublicacao. Imprima o título e o autor do livro.
const livro = {
    título: "Memórias póstumas de Brás Cubas",
    autor: "Machado de Assis",
    anoPublicacao: "1881"
}

console.log(livro.título)
console.log(livro.autor)

//Q.4 - Crie um objeto produto com as propriedades nome, preco e quantidade. Em seguida, calcule e imprima o valor total do estoque (preço * quantidade).
const produto = {
    nome: "Arroz",
    preco: "8",
    quantidade: "3"
}
let precoTotal = produto.preco*produto.quantidade;

console.log(precoTotal)
