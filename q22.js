//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.
const nomeCompleto = prompt("Digite seu nome: ");

const nomediv = nomeCompleto.split(' ');

const primeiro = nomediv[0];
const ultimo  = nomediv.slice(-1)
console.log(`O primeiro nome do usuário é ${primeiro} e o último é ${ultimo}`)




