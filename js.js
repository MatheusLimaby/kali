function CalcularMedia(...notas) {
    if (notas.length === 0) {
        console.log("Nenhuma nota fornecida.");
        return;
    }

    let elementos = notas.length;
    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    }

    let media = soma / elementos;
    console.log(media);
}