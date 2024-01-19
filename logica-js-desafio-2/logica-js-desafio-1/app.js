//primeira parte
alert('Olá bem vindo ao nosso site!')
   let diaDaSemana = prompt('Que dia da semana se passa hoje?');
        let sabado = "Sábado";
        console.log(sabado);
        let domingo = "Domingo";
        console.log(domingo);

    if (diaDaSemana == sabado | diaDaSemana == domingo) {
        alert('Tenha um bom final de semana!');
    } else {
        alert('Tenha uma boa semana!');
    }

//segunda parte
let numero = prompt('Por favor, digite um número positivo ou negativo.');
    if(numero > 0){
        alert('Seu número é positivo!');
      
    } else if(numero == 0){
        alert('seu número é zero');

    } else {
        alert('Seu número é negativo!');

    } 

//terceira parte
let pontos = prompt('Quantos pontos você tem?')
    if(pontos >= 100){
        alert('Parabéns, você venceu!')
    } else {
        alert('Tente novamente para ganhar.')
    }

//quarta parte
let saldo = prompt('Olá, Quanto é o seu saldo?');
    alert(`seu saldo é ${saldo}`);

//quinta parte
let nome = prompt('Olá, qual seu nome?');
    alert(`Seja bem vindo ${nome}`);