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
