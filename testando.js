function exibirMensagem() {
    if(true)
    {
        var escopoFuncao = 'Caelum'
        let escopoBloco = 'Alura' //funciona apenas dentro deste bloco de código

        console.log(escopoBloco)
    }

    console.log(escopoFuncao)
    console.log(escopoBloco)
}

console.log(exibirMensagem())