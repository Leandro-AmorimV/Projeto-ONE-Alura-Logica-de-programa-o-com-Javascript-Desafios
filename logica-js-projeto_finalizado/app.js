alert('Bem vindo ao nosso site!')
let multiplicacao = 100;
let numeroSecreto = parseInt(Math.random() *multiplicacao + 1);
console.log(`Número secreto = ${numeroSecreto}`);
let tentativas = 1;

let chute

while (numeroSecreto != chute) {
    chute = prompt(`Adivinhe o número secreto entre 1 e ${multiplicacao}`);

    if(numeroSecreto == chute){
        break;
      
            
    } else {
        if(numeroSecreto < chute){
            alert('O número secreto é um número menor.');
        } else {
            alert('O número secreto é um número maior.');
        }
    }
    tentativas++;
    console.log(`Tentativas: ${tentativas}`)
}

let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";

alert(`Parábens! O número secreto era ${numeroSecreto}, e você acertou com ${tentativas} ${palavraTentativa}!`);
