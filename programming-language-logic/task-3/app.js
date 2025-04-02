//TASK 3

alert('Welcome to the secret number game');
let secretNumber = 9;
console.log(secretNumber);
let guess;
let tentativas = 1;

while(guess != secretNumber){
    guess = prompt('Choose a number between 1 and 10');

    if (guess == secretNumber) {
        alert(`That's it! You discovered the secret number ${secretNumber} with ${tentativas} tries`);
    } else {
        if(guess > secretNumber){
            alert(`The secret number is lower than ${guess}`);
        } else {
            alert(`The secret number is bigger than ${guess}`);
        }
        tentativas++;
    }    
}


// Challenges
// Create a counter that starts at 1 and goes up to 10 using a while loop. Display each number.

// Create a counter that starts at 10 and goes down to 0 using a while loop. Display each number.

// Create a countdown program. Ask for a number and count from that number down to 0,
// using a while loop in the browser console.

// Create a progressive counting program. Ask for a number and count from 0 to that number,
// using a while loop in the browser console.




let count = 1;

while (count <= 10){
    console.log(count);
    count++;
}



let count = 10;

while (count >= 0) {
    console.log(count);
    count--;
}



let number = prompt('Insert a number to start de countdown:');

while (number <=0) {
    console.log(number);
    number--;
}
alert('Countdown done sucessfully!');



let number = prompt('Insert a number:');
let count = 0;

while (count < number){
    console.log(count);
    count++;
}

Nesta aula:
Aprendemos a verificar se um número é maior ou menor do que outro utilizando estruturas condicionais 
(if/else) em nosso programa;

Utilizamos o loop "while" para repetir um bloco de código enquanto uma determinada condição for verdadeira,
 e permitir assim que o programa execute uma ação várias vezes;

Implementamos um contador de tentativas para acompanhar e exibir a quantidade de vezes que o usuário tentou 
adivinhar um número secreto. Podemos fazer isso, por exemplo, em um jogo de adivinhação.