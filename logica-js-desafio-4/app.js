//parte um
console.log("Boas vindas!")

//paarte dois
let nome = "Leandro";
console.log(`Olá ${nome}`);

//parte três
let nome = "Leandro";
alert(`Olá ${nome}`);

//parte quatro
let linguagemPrg = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(`${linguagemPrg}`)

//parte 5
let valor1 = 3;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)

parte 6
let valor1 = 3;
let valor2 = 6;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`)

//parte 7
let idade = prompt("qual a sua idade?")
if(idade >= 18){
   alert('você é maior de idade.');
} else {
   alert('você é menor de idade.');
}

//parte 8
let numero = prompt('Digite um número positivo ou negativo.')
if(numero == 0){
    alert('seu número é zero!')
} else {
    if(numero > 0 ){
        alert('Seu número é postivo!')
    } else {
        alert('Seu número é negativo')
    }
}

// parte 9
let numero = 0;

while(numero != 11){
    console.log(`${numero}`);
    numero++;
}

//parte 10
let nota = 6;

if(nota >= 7){
    console.log('Aprovado.');
} else {
    console.log('Reprovado.');
}

//parte 11
let numero = Math.random();
console.log(`${numero}`);

//parte 12
let numero = parseInt(Math.random() *10 + 1);
console.log(`${numero}`);

//parte 13
let numero = parseInt(Math.random() *1000 + 1);
console.log(`${numero}`);
