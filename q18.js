//Crie um array de objetos representando carros, cada um com propriedades nome e ano, 
//e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.
const carros = [
    { nome: 'Fox', ano: 2010},
    { nome: 'Corolla', ano: 2023 },
    { nome: 'Hb20', ano: 2018 },
   ];

const carrosfab2010 = carros.filter((carro) => {
    return carro.ano>2010
})   

console.log(carrosfab2010);
