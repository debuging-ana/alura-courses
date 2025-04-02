//Desafios
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
 //mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre
 //"Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.


let day = prompt('What day is it?');

if (day == "Saturday" && day == "Sunday"){
    console.log('Have a good weekend!');
} else {
    console.log('Good week!');
}


let number = prompt('Insert a number:');

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


let points = prompt('Insert your score:');

if(points >= 100){
    alert('Congrats! You won!');
} else {
    alert('Try again to win!');
}


let balance = prompt('Insert the balance:');

let message = `Your balance is: NZ$ ${balance}`;
alert(message);


let name = prompt('Insert your name: ');
alert(`Welcome ${nome}!`);
