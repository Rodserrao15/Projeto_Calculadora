let numeros = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let numero3 = document.querySelector("#num3");
let numero4 = document.querySelector("#num4");
let numero5 = document.querySelector("#num5");
let numero6 = document.querySelector("#num6");
let numero7 = document.querySelector("#num7");
let numero8 = document.querySelector("#num8");
let numero9 = document.querySelector("#num9"); 
let numero0 = document.querySelector("#num0");
let visor = document.querySelector("#visor");
let valores = [];
let operadores = [];
let teste = document.querySelector(".teste");
let teste1 = document.querySelector(".teste1");

function armazenarNumero(p){
    let posicao = valores.length - 1
    visor.value += p;
    valores[posicao] += p
    teste.innerHTML = valores
}
function somar(){
    if(visor.value.length !== 0 && visor.value.at(-1) !== " " ){
        visor.value += " + ";
        valores.push("");
        if(operadores.length === 0){
            operadores.push("+");
        }
    }
    teste1.innerHTML = operadores
}

