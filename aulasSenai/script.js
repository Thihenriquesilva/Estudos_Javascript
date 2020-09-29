
//Meu objeto PET

var pet = 
{
    NomePet:"",
    NomeDono:"",
    Raca:"",
    Idade: '',
    Cor: '',
    Porte: '',
    Massa: '',
    TipoPet: '',
    Sexo: '',
    Descricao: ''
}

//Array para guardar os Pets
var listObjects = [];


function save(){
    //Pegando os IDs e colocando dentro do objeto pet
    pet.NomePet = document.getElementById("NomePet").value;
    pet.NomeDono = document.getElementById("NomeDono").value;
    pet.Raca = document.getElementById("Raca").value;
    pet.Idade = document.getElementById("Idade").value;
    pet.Cor = document.getElementById("Cor").value;
    pet.Porte = document.getElementById("Porte").value;
    pet.Massa = document.getElementById("Massa").value;
    pet.TipoPet = document.querySelector('input[name="tipoPet"]:checked').value;
    pet.Sexo = document.querySelector('input[name="sexo"]:checked').value;
    pet.Descricao = document.getElementById("Descricao").value;

    listObjects.push(pet);
    console.log(listObjects);
    alert('Pet Cadastrado');
}


function lista(){
    var tbody = document.getElementById('tbody');
    listObjects.forEach(function (relatorio){
        var tr = document.createElement('tr');
        for(var campo in relatorio){
            var td = document.createElement('td');
            td.innerHTML = relatorio[campo]
            tr.appendChild(td);
        };
        tbody.appendChild(tr)
    })
}
console.log(pet);
