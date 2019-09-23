function pegaNumero(mensagem) {

    return parseFloat(prompt(mensagem).replace("O", "0").replace("o", "0").replace(",","."))
}