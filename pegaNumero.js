var mensagem
function pegaNumeroDecimal() {
    return parseFloat(prompt(mensagem).replace("O", "0").replace("o", "0").replace(",","."))
}