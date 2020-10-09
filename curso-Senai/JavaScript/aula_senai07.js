var pessoas = [
    {nome:'Thiago',idade:21,sexo:"M",peso:64.5},
    {nome:'Marco',idade:17,sexo:'M',peso:62},
    {nome:'Lais',idade:19,sexo:'F',peso:60},
    {nome:'Morgana',idade:20,sexo:"F",peso:58},
    {nome:'Arthur',idade:58,sexo:"M",peso:70}
]

//forEach, map, filter, find, every, some, reduce


console.log(pessoas)

//forEach

pessoas.forEach(function(nome){
    console.log(nome);
})

//map
var daquiMeioSeculo = pessoas.map(function(pessoa){
    return pessoa.idade *2 
})

console.log(daquiMeioSeculo)


//filter

var balanceamento = pessoas.filter(function(pessoa){
    return pessoa.idade >=18 && pessoa.idade < 30
})
console.log(balanceamento)


//find

var sexoM = pessoas.find(function(pessoa){
    return pessoa.nome === 'Arthur'
})

console.log(sexoM)

//every

var pessoasDeMeno = pessoas.every(function(pessoa){
    return pessoa.idade <18
})
console.log(pessoasDeMeno)


//some
var pesoPena = pessoas.some(function(pessoa){
    return pessoa.peso <60
})
console.log(pesoPena)

//reduce

var somarIdades = 0
somarIdades = pessoas.reduce(function(somarIdades,pessoa){
    return somarIdades + pessoa.idade
},0)

console.log(somarIdades)