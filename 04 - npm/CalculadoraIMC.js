 //criando um módulo no meu projeto
 //Exportar as funcionadalidades desse módulo

export function calculaIMC(peso, altura){
    return peso / (altura * altura);
 }

export const tabelaIMC = [
    {limite:18.5, classificacao:"Magreza"},
    {limite:24.9, classificacao:"Normal"},
    {limite:29.9, classificacao:"Sobrepeso"},
    {limite:34.9, classificacao:"Obesidade Grau 1"},
    {limite:39.9, classificacao:"Obesidade Grau 2"},
    {limite:40.0, classificacao:"Obesidade Grau 3"}
]