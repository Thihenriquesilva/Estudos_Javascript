function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  const listaPessoa = []


console.log(Pessoa());
console.log(listaPessoa)
var pessoa1 = new Pessoa('Thiago',21,'M')

console.log(pessoa1)

listaPessoa.push(pessoa1)
console.log(listaPessoa)

var pessoa2 = new Pessoa("Taina",20,"F")

listaPessoa.push(pessoa2)

console.log(listaPessoa)

console.log(listaPessoa.length)

for(var pesca in listaPessoa){

    console.log(listaPessoa[pesca])
}