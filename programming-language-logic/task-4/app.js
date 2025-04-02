alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

if(tentativas > 1) {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}

//another way to do exactly the same but shorter way is down below:

//let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);




//E N G L I S H :


alert('Welcome to the secret number game');
let secretNumber = parseInt(Math.random() * 10 + 1);
console.log(secretNumber);
let guess;
let attempts = 1;

// while guess is not equal to the secret number
while (guess != secretNumber) {
    guess = prompt('Choose a number between 1 and 10');
    // if guess is equal to the secret number
    if (guess == secretNumber) {
       break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is less than ${guess}`);
        } else {
            alert(`The secret number is greater than ${guess}`);
        }
        // attempts = attempts + 1
        attempts++;
    }
}

if(attempts > 1) {
    alert(`That's it! You found the secret number ${secretNumber} with ${attempts} attempts!`);
} else {
    alert (`That's it! You found the secret number ${secretNumber} with ${attempts} attempt!`);
}

// another way to do exactly the same but shorter way is down below:

// let attemptWord = attempts > 1 ? 'attempts' : 'attempt'
// alert(`That's it! You found the secret number ${secretNumber} with ${attempts} ${attemptWord}`);


