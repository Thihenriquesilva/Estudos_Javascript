function exibirMensagem() {
    let escopoBloco 
    if(true)
    {
        var escopoFuncao = 'Caelum'
        escopoBloco = 'Alura' //funciona apenas dentro deste bloco de código

        console.log(escopoBloco)
    }

    console.log(escopoFuncao)
    console.log(escopoBloco)
}

console.log(exibirMensagem())




var msg = "Hello World!";

console.log(msg);

//Função que chama a si mesma

function fatorial(n){
    if((n == 0)||(n == 1))
        return 1;
    else
        return (n*(fatorial(n -1)));
}

console.log(fatorial(5));
