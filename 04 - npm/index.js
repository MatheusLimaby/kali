import {calculaIMC, tabelaIMC} from "./CalculadoraIMC.js";

console.log("Meu Projeto Rodando")

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)
const peso = 100;
const altura = 1.88;

const imc = calculaIMC(peso, altura);

console.log(imc.toFixed(2));

import moment from "moment"

const hoje = moment().locale("pt-br").format("dddd, DD [de] MMMM [de] YYYY");
console.log('Data:');
console.log(hoje);


