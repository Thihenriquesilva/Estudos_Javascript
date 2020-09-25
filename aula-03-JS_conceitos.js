console.log( 'teste' );     // teste

// Tipos de Dados

var idade = 27;
var nome = 'Saulo';
var sextaFeira = true;
var pessoa = {
    nome,
    idade,
    sobrenome : 'Santos'
};
var pessoas = [ pessoa, pessoa2 = {
    nome : 'Carol',
    idade : 25,
    desempregada : false
} ];

var naoDefinido = undefined;
var nulo = null;

// Diferenças entre undefined e null

var exemplo;
console.log( exemplo );     // undefined


var exemplo = null;
console.log( exemplo );     // null


// Typeof

console.log( typeof idade );        // number
console.log( typeof nome );         // string
console.log( typeof sextaFeira );   // boolean
console.log( typeof pessoa );       // object
console.log( typeof pessoa2 );      // object
console.log( typeof pessoas );      // object
console.log( typeof naoDefinido );  // undefined
console.log( typeof nulo );         // object
// object ?? isto está errado, deveria retornar null
// portanto, é recomendado utilizar o typeof apenas em tipos de dados primitivos


// Operadores Lógicos e Condicionais

// && (AND)

if ( idade > 18 && idade < 60 ) {
    console.log( 'Ainda não pode se aposentar.' )
};
// Ainda não pode se aposentar.


// || (OR)

var dia = 'quinta-feira';

// ==       comparam apenas o valor
// ===      comparam o valor e o tipo do dado

if ( dia === 'sexta-feira' || dia === 'quinta-feira' ) {
    console.log( 'Dia útil.' )
};
// Dia útil.


// ! (NOT)

if ( pessoa2.desempregada !== true ) {
    console.log( 'A pessoa está empregada.' )
}
else {
    console.log( 'A pessoa está desempregada.' )
};
// A pessoa está empregada.


// Ternário

1 > 2 ? console.log( 'Sim, 1 é maior que 2.' ) : console.log( 'Não, 1 não é maior que 2.' );
// Não, 1 não é maior que 2.

// Outra forma do exemplo anterior, com ternário

pessoa2.desempregada ? console.log( 'A pessoa está desempregada.' ) : console.log( 'A pessoa está empregada.' );
// A pessoa está empregada.


// Funções

var nome = 'Saulo';
var sobrenome = 'Santos';


// Declaração de uma função

function nomeCompleto() {
    var anoNascimento = '1992';
    return 'Meu nome completo é ' + nome + ' ' + sobrenome + ' ';
};


// Invocação de uma função

console.log( nomeCompleto() );
// Meu nome completo é Saulo Santos


// Parâmetros de uma função

function soma( x, y ) {
    return x + y;
};

console.log( soma( 1, 2 ) );    // 3


// Métodos

pessoa.altura = 1.74;

pessoa.crescer = function( qtdM ) {
    pessoa.altura = pessoa.altura + qtdM;
};

console.log( 'Antes de crescer: ' + pessoa.altura );
// Antes de crescer: 1.74

pessoa.crescer( 0.03 );
// .crescer() é um método do objeto pessoa

console.log( 'Depois de crescer: ' + pessoa.altura );
// Depois de crescer: 1.77