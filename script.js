//1 - crie uma função que exiba uma mensagem no console
function mensagem(){
    console.log("Olá mundo")
}

mensagem();
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mensagem2(Raquel){
    console.log(Raquel)
}
mensagem2("Raquel");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido 
//(parâmetros) e exiba no console
function mensagem3(nome, idade, estiloMusical){
    console.log(nome,idade,estiloMusical)
}
mensagem3("Meu nome é Raquel","eu tenho 22 anos","meu estilo musical favorito é pagode");
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function mensagem3(filme, musica){
    console.log(filme, musica)
}
mensagem3("everything everywhere all at once", "Um pôr do Sol na praia");
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(number){
    return number * 3;
}

let valor = triplo(30);

console.log(valor);

