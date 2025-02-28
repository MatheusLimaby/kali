let nome = "Matheus"
let idade = 19
let cidade = "São Paulo"
let estado = "SP"
let pais = "Brasil"

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}, ${estado}, ${pais}.`)

array = []

for (let i = 0; i < 10; i++) {
    let aleatorio = Math.floor(Math.random() * 100)
    array.push(aleatorio)
}

console.log(array)

array.map((numero) => {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é ímpar`)
    }
})

array.filter((numero) => {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    }
})