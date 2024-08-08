/*Usando CommonJS, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) e exponenciação.  
Em seguida, utilize essas funções em outro arquivo.*/

const funcoes = require('./funcoesum')

console.log(funcoes.somar(5,2))
console.log(funcoes.subtrair(5,2))
console.log(funcoes.multiplicacao(5,2))
console.log(funcoes.divisao(5,2))
console.log(funcoes.exponenciacao(5,2))