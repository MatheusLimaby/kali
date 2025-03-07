let pessoa = {
    idade: 25,
    nome: 'João',
    sobrenome: 'Silva',
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

let endereco = {
    rua: 'Rua 1',
    numero: 123,
    cidade: 'Cidade A',
    estado: 'Estado X'
}   

let pessoacompleta = {pessoa, endereco}
const {nome, idade} = pessoa


console.log(pessoacompleta)
console.log(nome)
