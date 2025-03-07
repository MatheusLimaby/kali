//Exerecício 1

    let palavra = "Matheus";
    palavra = palavra.toUpperCase();
    console.log(palavra);

    palavra = palavra.toLowerCase();
    console.log(palavra);

    console.log("Matheus".split('').reverse().join(''));
    
    if(palavra.includes('a')){
        console.log(palavra.replace('a', 'o'));
    }

//Exercício 2

    let calculos = (a,b) => {
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);

        if (a > b){
            console.log(a);
    }
}
calculos(15,5);

//Exercício 3

    VerificarIdade = (idade) => {
        if(idade >= 65){
            console.log("Idoso");
        }

        if(idade >= 18 && idade < 65){
            console.log("Adulto");
        }
        if(idade < 18){
            console.log("Menor de idade");
        }
   
    }
    VerificarIdade(65);
    VerificarIdade(15);
    VerificarIdade(50);

//Exercício 4

    for(i = 1; i <= 100; i++){
        console.log(i);
    }

//Exercício 5

    Valor = (numero) => {
        console.log(numero * 2);
        console.log(numero * 3);
        console.log(numero * 4);
    }

    Valor(5);

//Exercício 6

    let array = [10,20,30,40,50];



    operacoesarray = (array) => {

        array.push(5)
        console.log(array)
        array.shift()
        console.log(array)
        
        let maiorNumero = Math.max(...array);
        let menorNumero = Math.min(...array);

        console.log("Maior número:", maiorNumero);
        console.log("Menor número:", menorNumero);      
    
    }
    operacoesarray(array);

//Exercício 7

    let array2 = ["Maçã", "Banana", "Abacaxi", "Laranja"];

    array2.forEach((element) => { console.log(element.toUpperCase()) });
    array2.filter((element) => { if(element.includes('A')){ console.log(element)} });
    let arrayComprimentos = array2.map((element) => element.length);

    console.log(arrayComprimentos);

//Exercício 8

    pessoa = {
        nome: "Carlos",
        idade: 28,
        cidade: "São Paulo"
    }
 
    testeObjetos = (pessoa) => {
        pessoa.curso = "Engenharia de Software";
        
        console.log(pessoa);
        delete pessoa.nome;
        console.log(pessoa);
        let propriedades = Object.keys(pessoa);
         console.log(propriedades);
    }

    testeObjetos(pessoa);

//Exercício 

let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };
let { titulo, autor } = livro;

console.log("Título:", titulo);
console.log("Autor:", autor);

function obterTituloEAutor(livro) {
    let { titulo, autor } = livro;
    console.log( `Título: ${titulo}, Autor: ${autor}`);
}

obterTituloEAutor(livro);
   




    

   
