

function CalcularMedia(...notas){


    elementos = notas.length
    soma = 0

    for (nota of notas){
        soma += nota
    }

    media = soma/elementos

    console.log(media)
    

}

CalcularMedia(5,6,7)
