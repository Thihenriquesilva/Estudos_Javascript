//Exercicio 1
var pessoa = {
    nome : 'Thiago',
    sobrenome : 'Henrique',
    genero : 'Masculino',
    idade : 21,
    altura : 1.68,
    peso : 62.8,
    andando : false,
    caminhouQuantosMetros :0
};

console.log(pessoa);
//Mostro os valores de cada propriedade de pessoa

//Exercicio 2
pessoa.fazerAniversario = function(){
    this.idade = this.idade + 1;
};
// Método do objeto pessoa
console.log(pessoa.idade)
//pessoa.idade antes de chamar o método fazerAniversário
// pessoa.fazerAniversario();
//pessoa.idade = pessoa.idade + 1
//pessoa.idade depois de chamar o método fazerAniversário

//Exercicio 3
console.log('Quantidade de metros caminhados: ' + pessoa.caminhouQuantosMetros,', Está andando: '+ pessoa.andando)

pessoa.andar = function(qtMA){
    this.caminhouQuantosMetros  = this.caminhouQuantosMetros + qtMA
    this.andando = true
}

console.log('Quantidade de metros caminhados: ' + pessoa.caminhouQuantosMetros,', Está andando: '+ pessoa.andando)

//Exercicio 4

pessoa.parar = function(){
    this.andando = false
}

pessoa.parar()

console.log(pessoa.andando)
//pessoa.andando = false

//Exercicio 5
pessoa.nomeCompleto = function(){
    return 'Olá! Meu nome é ' + this.nome + ' ' + this.sobrenome
}

console.log(pessoa.nomeCompleto());
// Olá! Meu nome é Thiago Henrique

//Exercicio 6

pessoa.mostrarIdade = function(){
    return 'Olá, eu tenho ' + this.idade + ' anos!'
}

console.log(pessoa.mostrarIdade());
//Olá, eu tenho 21 anos

//Exercicio 7

pessoa.mostraPeso = function(){
    return 'Eu peso ' + this.peso + 'Kg.'
}

console.log(pessoa.mostraPeso());
//Eu peso 62.8Kg.

//Exercicio 8
pessoa.mostrarAltura = function(){
    return 'Minha altura é ' + this.altura + "m."
}

console.log(pessoa.mostrarAltura());
//Minha altura é 1.68m.

//Exercicio 9

console.log(pessoa.nomeCompleto()) //Olá, meu nome é Thiago Henrique

//Exercicio 10 
console.log(pessoa.mostrarIdade()) //Olá, eu tenho 21 anos!
//Desconsidere o fazerAniversário

//Exercicio 11
console.log(pessoa.mostraPeso()) //Eu peso 62.8Kg

//Exercicio 12
console.log(pessoa.mostrarAltura()) // Minha altura é 1.68m

//Exercicio 13
//Idade atual
console.log(pessoa.idade) // 21
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()
//3 anos depois...
console.log(pessoa.idade) //24
//Exercicio 14
console.log(pessoa.mostrarIdade()) //24

//Exercicio 15
pessoa.andar(1)
pessoa.andar(3)
pessoa.andar(5)

//Exercicio 16

console.log(pessoa.andando) //true

//Exercicio 17

pessoa.parar()

//Exercicio 18
console.log(pessoa.andando) //false

//Exercicio 19
console.log(pessoa.caminhouQuantosMetros) //9metros

//Exercicio 20
pessoa.apresentacao = function(){
    var sintaxeGen = this.genero !== "Feminino" ? 'o' : 'a';
    var sintaxeIdade = this.idade === 1 ? 'ano' : 'anos';
    var sintaxeMetro = this.caminhouQuantosMetros === 1 ? 'metro' : 'metros'

    return 'Olá, eu sou ' + sintaxeGen + ' ' + this.nome + ' ' + this.sobrenome + ', tenho ' + this.idade + ' ' + sintaxeIdade + ', ' + this.altura + 'm, meu peso é ' + this.peso + 'Kg e, só hoje, eu já caminhei ' + this.caminhouQuantosMetros + ' ' + sintaxeMetro + '!';
}


console.log(pessoa.apresentacao());
