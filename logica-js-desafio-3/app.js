//parte um
let numero = 1;

while(numero != 11){
    alert(`${numero}`);
    numero++;
}

//paarte dois
let numero = 10;

while(numero != -1){
    alert(`${numero}`);
    numero--;
}

//parte três
let numero = prompt("coloque um número que iniciará a contagem regressiva.");

while(numero != -1){
    alert(`${numero}`);
    numero--;
}

//parte quatro
let inicio = -1;
let numero = prompt("coloque um número que irá terminar a contagem progressiva.");

while(inicio != numero){
    alert(`${inicio + 1}`);
    inicio++;
}
