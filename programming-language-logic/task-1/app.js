// - Mostre um alerta com a mensagem "Boas vindas ao nosso site!"
// - Declare uma variável chamada nome e atribua a ela o valor "Lua"
// - Crie uma variável chamada idade e atribua a ela o valor 25
// - Defina uma variável numeroDeVendas e atribua a ela o valor 50
// - Defina uma variável saldoDisponivel e atribua a ela o valor 1000
// - Exiba um alerta com o texto "Erro! Preencha todos os campos"
// - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro
// - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome
// - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade
// - Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!


alert('Welcome to my website!');

let name = "Lua";
let age = 25;
let numberSold = 50;
let balanceAvailable = 1000;

alert('Error! Fill all the fields!');
let errorMessage = "Error! Fill all the fields!";
alert(errorMessage);

name = prompt('Whats your name?');
age = prompt('How old are you?');

if (age >= 18){
    alert('You can get a drive license');
}
