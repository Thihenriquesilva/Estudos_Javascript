//Exercicio - 1
//Dado o objeto 
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 }
 /*Faça uma função que retorne:
 O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
 nº 1293.*/
 function retorne(){
   return `O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
 }
 retorne();
 
 //Exercicio - 2
 
 //Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
 var pares = [];
 function exibePar(n1,n2){
    while(n1<=n2){
       if((n1%2)==0){
         // pares.push(n1);
         console.log(n1);
       }
       n1++    
    }
 }
 exibePar(0,20);
 // console.log(pares);
 
 
 
 //Exercicio - 3
 
 //Escreva uma função que verifique se o vetor de habilidades passado possui a //habilidade "Javascript"
 //e retorna um booleano true/false caso exista ou não.

 function temHabilidade(skill){
        let resposta = skills.indexOf(skill);

        if(resposta === -1){
            return false
        }
        else{
          return true;
        }
 }

var skills = ['Javascript', 'ReactJs', 'React Native'];
let resultado = temHabilidade('C#'); // true ou false

console.log(resultado);


//Exercicio - 4
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos){
  let resultado;

  switch(anos){
    case 0:
    case 1:
      resultado = 'Iniciante';
    break;
    case 2:
    case 3:
      resultado = 'Intermediário';
    break;
    case 4:
    case 5:
    case 6:
      resultado = "Avançado";
    break;
    default:
      resultado = "Jedi Master";
    break;

  }
  return resultado;
}

var anosEstudos = 5;
console.log('======================');
console.log(experiencia(anosEstudos));

//Exercico - 5

//Dado o seguinte vetor de objetos:

var usuarios = [
  {
    nome: 'Diego',
    habilidades:["Javascript","ReactJS","Redux"]
  },
  {
    nome:"Gabriel",
    habilidades:["VueJs","Ruby on Rails","Elixir"]
  }
];

//Escreva uma função que produza o seguinte resultado:
/*
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

function demonstra(){
  for(const dado of usuarios){
    console.log(`O ${dado.nome} possui as habilidades: ${dado.habilidades.join()}`);
  }
}

console.log("=======");
demonstra();


