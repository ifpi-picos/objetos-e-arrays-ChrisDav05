/*Usando Módulos JavaScript, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) e exponenciação. 
 Em seguida, utilize essas funções em outro arquivo.*/
import {somar,subtrair,multiplicacao,divisao,exponenciacao} from './funcoesdois'

const soma = somar(5,2);
console.log(soma)
const subtrai = subtrair(5,2);
console.log(subtrai)
const multiplica = multiplicacao(5,2)
console.log(multiplica)
const dividir = divisao(5,2)
console.log(dividir)
const potencia = exponenciacao(5,2)
console.log(potencia)