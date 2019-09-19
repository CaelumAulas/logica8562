function pegaNumeroDecimal(mensagemDoPopup) {
    return parseFloat(prompt(mensagemDoPopup).replace("O", "0").replace("o", "0").replace(",","."))
}