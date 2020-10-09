var nInteiro = 1200;
var nReal = 12.6;
var texto = "Oi eu sou a Lenda"

console.log(texto) //Mostra o nome
console.log(texto.replace(" ", ";")) 
console.log(texto.length)//Mostra a quantidade de caracteres 
console.log(texto.length + 2) // Mostra a quantidade de caracteres e soma com outro valor
console.log(texto.toUpperCase()) // Mostra os caracteres em letras maiúsculas
console.log(texto.toLowerCase()) // Mostra os caractres em letras minúsculas

var testes = texto.length

console.log(typeof testes) // Retorno o tipo da variavel
console.log(typeof testes.toString())//Retorno o tipo da variavel após converte-la para string
console.log(typeof 14)//Retorno o tipo da variavel



console.log(nInteiro);
console.log(nInteiro.toFixed(2));
console.log(nInteiro.toPrecision());
console.log(nInteiro.toExponential());

console.log(nReal)
console.log(nReal.toFixed(2).repeat(3," "))
console.log(nReal.toFixed(2).replace(".",","))
console.log(nReal.toFixed(4))



