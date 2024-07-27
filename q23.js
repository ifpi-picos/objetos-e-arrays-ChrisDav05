//Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.
const nomeCompleto = prompt("Digite seu nome completo: ");

const divNome = nomeCompleto.split(' ');

const primeiroNome = divNome[0]

console.log(`O primeiro nome do usuário é: ${primeiroNome}`)

