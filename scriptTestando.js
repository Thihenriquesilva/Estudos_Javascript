//window.alert("Funcionou!");

//window: janela do navegador 

//document: página

/* 
    >>>Isso aqui<<<
    var nome = 'Thiago';
    var nome = 'Diego';
    A segunda declaração de var é ignorada;

    >>>É isso aqui<<<
    var nome = 'Thiago';
    nome = 'Diego';
*/


var nome = 'Thiago';


// if(nome == 'Thiago')
// {
//     var idade = 21;
// }

//variaveis com nomes iguais inicializadas em escopos diferentes
//é permitido (no caso de varieveis let)
function mostrarDados(nome){
    let idade;     
    if(nome == 'Thiago')
    {
        idade = 21;
    }
    return idade;
}
let mostra = mostrarDados(nome);
let idade= 17.5;

document.writeln('<p>'+idade+'</p>');
document.writeln(mostra);


//seleciona uma cor para o background de um quadrado
function selecionar(){

    let valor = document.querySelector('#numbers').value;

    let cor;
    
    switch(valor)
    {
        case 'black':
            cor = '#000000';
        break;
        case 'blue':
            cor ='#0000FF';
        break;
        case 'red':
            cor ='#FF0000';
        break;
        case 'green':
            cor ='#008000';
        break;
        default:
            cor = '#fff';
        break;
    }
        
    document.querySelector('#quadrado').style.background = cor;
}