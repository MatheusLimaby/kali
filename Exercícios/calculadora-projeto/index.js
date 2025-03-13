//Atividade 1

import {soma, subtracao, multiplicacao, divisao} from './calculadora.js'

console.log("Soma:", soma(10, 5));
console.log("Subtração:", subtracao(10, 5));
console.log("Multiplicação:", multiplicacao(10, 5));
console.log("Divisão:", divisao(10, 5));


//Atividade 2

import moment from 'moment';
function calcularIdade(anoNascimento) {
    const anoAtual = moment().year();
    return anoAtual - anoNascimento;

}
const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);